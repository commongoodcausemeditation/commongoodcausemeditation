document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('meditation-overlay');
    const closeBtn = document.getElementById('close-overlay');
    const finishBtn = document.getElementById('finish-meditation');
    const overlayIcon = document.getElementById('overlay-icon');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayIntent = document.getElementById('overlay-intent');
    const overlayCountdown = document.getElementById('overlay-countdown');

    let countdownInterval;

    window.startMeditation = function(id, title, icon, intent, time) {
        overlayIcon.textContent = icon;
        overlayTitle.textContent = title;
        overlayIntent.textContent = `"${intent}"`;
        
        overlay.classList.remove('hidden');
        overlay.style.display = 'flex'; // Force flex display
        
        // Small delay for the fade-in effect
        requestAnimationFrame(() => {
            overlay.classList.remove('opacity-0');
        });

        document.body.style.overflow = 'hidden';
        startTimer(20 * 60);
        if (typeof window.logParticipation === "function") window.logParticipation(id);
    };

    function startTimer(seconds) {
        clearInterval(countdownInterval);
        let timeRemaining = seconds;

        const updateUI = () => {
            const m = Math.floor(timeRemaining / 60);
            const s = timeRemaining % 60;
            overlayCountdown.textContent = `${m}:${s.toString().padStart(2, '0')}`;
            
            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                overlayCountdown.textContent = "DONE";
            }
            timeRemaining--;
        };

        updateUI();
        countdownInterval = setInterval(updateUI, 1000);
    }

    function closeOverlay() {
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            overlay.classList.add('hidden');
            overlay.style.display = 'none';
        }, 500);
        document.body.style.overflow = '';
        clearInterval(countdownInterval);
        if (typeof window.stopAllSounds === "function") window.stopAllSounds();
    }

    if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
    if (finishBtn) finishBtn.addEventListener('click', closeOverlay);
});
