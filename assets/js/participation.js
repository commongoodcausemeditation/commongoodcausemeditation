// Participation Tracker (Local Only)
document.addEventListener('DOMContentLoaded', () => {
    // Correctly initialize from local storage
    let stats = JSON.parse(localStorage.getItem('meditation_stats') || '{"totalSessions": 0, "causes": {}}');
    
    window.logParticipation = function(id) {
        stats.totalSessions++;
        stats.causes[id] = (stats.causes[id] || 0) + 1;
        localStorage.setItem('meditation_stats', JSON.stringify(stats));
        updateStatsUI();
        console.log(`Participated in ${id}. Total sessions: ${stats.totalSessions}`);
    };

    function updateStatsUI() {
        const totalEl = document.getElementById('user-total-sessions');
        if (totalEl) {
            totalEl.textContent = stats.totalSessions;
            // Add a small scale-up animation when it updates
            totalEl.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(1.1)' },
                { transform: 'scale(1)' }
            ], { duration: 500, easing: 'ease-out' });
        }
    };
    
    updateStatsUI();
});
