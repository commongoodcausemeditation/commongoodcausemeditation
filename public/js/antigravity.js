/**
 * ANTIGRAVITY TIME ENGINE
 * Synchronizes UTC meditation times to local visitor timezones.
 */

document.addEventListener('DOMContentLoaded', () => {
    initTimeConversion();
    initHeroCountdown();
});

function initTimeConversion() {
    const timeElements = document.querySelectorAll('[data-utc-time]');
    
    timeElements.forEach(el => {
        const utcDateStr = el.getAttribute('data-utc-time');
        const utcDate = new Date(utcDateStr);
        
        if (isNaN(utcDate.getTime())) return;

        // Detection of local time
        const options = { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true,
            timeZoneName: 'short' 
        };
        
        const localTimeStr = utcDate.toLocaleTimeString(undefined, options);
        
        // Render
        el.textContent = localTimeStr;
        
        // Add a tooltip for the UTC original
        el.title = `UTC: ${utcDate.toUTCString()}`;
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
                <div><span class="text-3xl font-bold">${days}</span><p class="text-[8px] uppercase">Days</p></div>
                <div><span class="text-3xl font-bold">${hours}</span><p class="text-[8px] uppercase">Hrs</p></div>
                <div><span class="text-3xl font-bold">${mins}</span><p class="text-[8px] uppercase">Min</p></div>
                <div><span class="text-3xl font-bold">${secs}</span><p class="text-[8px] uppercase">Sec</p></div>
            </div>
        `;
    }

    update();
    setInterval(update, 1000);
}
