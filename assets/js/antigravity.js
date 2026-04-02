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
        const parts = Intl.DateTimeFormat(undefined, { timeZoneName: 'short' }).formatToParts(new Date());
        const tzPart = parts.find(p => p.type === 'timeZoneName');
        return tzPart ? tzPart.value : 'Local';
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
