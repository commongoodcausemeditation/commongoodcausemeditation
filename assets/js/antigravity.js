/**
 * ANTIGRAVITY TIME ENGINE
 * Synchronizes UTC meditation times to local visitor timezones.
 * Format: Local TZ | UTC (e.g. 23:54 IST | 18:24 UTC)
 */

document.addEventListener('DOMContentLoaded', () => {
    initTimeConversion();
    initHeroCountdown();
});

/**
 * Get the short timezone abbreviation for the user's locale.
 * e.g. "IST", "EST", "CET", "PST"
 */
function getLocalTzAbbr() {
    try {
        // 1. Try to get a proper short name using the explicit en-US locale
        const parts = Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(new Date());
        const tzPart = parts.find(p => p.type === 'timeZoneName');
        
        let tzValue = tzPart ? tzPart.value : null;

        // 2. If it succeeds and it's NOT a GMT offset, return it
        if (tzValue && !tzValue.startsWith('GMT') && !tzValue.startsWith('UTC')) {
            return tzValue;
        }

        // 3. If it falls back to a GMT offset, extract initials from the full timezone string
        const dateString = new Date().toString();
        const match = dateString.match(/\(([^)]+)\)/); // e.g., "(India Standard Time)"
        
        if (match) {
            const tzName = match[1];
            // If the browser already gave a short name in parenthesis (e.g., "IST")
            if (tzName.length <= 5 && !tzName.includes(' ')) {
                return tzName.toUpperCase();
            }
            // Otherwise extract the first letter of each word (e.g., "India Standard Time" -> "IST")
            const initials = tzName.split(' ')
                                   .filter(word => word.length > 0)
                                   .map(word => word[0])
                                   .join('')
                                   .toUpperCase();
            return initials;
        }
        
        return tzValue || 'Local';
    } catch {
        return 'Local';
    }
}

function initTimeConversion() {
    const timeElements = document.querySelectorAll('[data-utc-time]');
    const tzAbbr = getLocalTzAbbr();
    
    timeElements.forEach(el => {
        const utcDateStr = el.getAttribute('data-utc-time');
        const utcDate = new Date(utcDateStr);
        
        if (isNaN(utcDate.getTime())) return;

        // Local time in 24h format
        const localOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
        const localTimeStr = utcDate.toLocaleTimeString(undefined, localOptions);

        // UTC time in 24h format
        const utcOptions = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' };
        const utcTimeStr = utcDate.toLocaleTimeString('en-US', utcOptions);

        // Render as "HH:MM TZ | HH:MM UTC"
        el.textContent = `${localTimeStr} ${tzAbbr} | ${utcTimeStr} UTC`;
        
        // Full date tooltip
        el.title = utcDate.toUTCString();
    });
}

function initHeroCountdown() {
    const countdownEl = document.getElementById('hero-countdown');
    if (!countdownEl) return;

    const targetTime = new Date(countdownEl.getAttribute('data-target-time'));
    
    function update() {
        const now = new Date();
        const diff = targetTime - now;

        if (diff <= 0) {
            countdownEl.textContent = "SESSION IN PROGRESS";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `
            <div class="flex gap-4 text-center">
                <div><span class="countdown-num">${String(days).padStart(2, '0')}</span><p class="text-[8px] uppercase">Days</p></div>
                <div><span class="countdown-num">${String(hours).padStart(2, '0')}</span><p class="text-[8px] uppercase">Hrs</p></div>
                <div><span class="countdown-num">${String(mins).padStart(2, '0')}</span><p class="text-[8px] uppercase">Min</p></div>
                <div><span class="countdown-num">${String(secs).padStart(2, '0')}</span><p class="text-[8px] uppercase">Sec</p></div>
            </div>
        `;
    }

    update();
    setInterval(update, 1000);
}
