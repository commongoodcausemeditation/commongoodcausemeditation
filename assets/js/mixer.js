document.addEventListener('DOMContentLoaded', () => {
    const audioAssets = {
        rainforest: '/sounds/rainforest.mp3',
        space: '/sounds/space.mp3',
        bowls: '/sounds/bowls.mp3',
        white: '/sounds/white-noise.mp3'
    };

    const players = {};
    
    // UI Selectors
    const toggles = document.querySelectorAll('.sound-toggle');
    const sliders = document.querySelectorAll('.volume-slider');

    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const sound = btn.getAttribute('data-sound');
            toggleSound(sound, btn);
        });
    });

    sliders.forEach(slider => {
        slider.addEventListener('input', () => {
            const sound = slider.getAttribute('data-sound');
            if (players[sound]) {
                players[sound].volume = slider.value;
            }
        });
    });

    function toggleSound(sound, btn) {
        if (players[sound]) {
            players[sound].pause();
            players[sound] = null;
            btn.classList.remove('btn-primary');
            btn.classList.add('bg-[var(--color-surface)]');
        } else {
            const audio = new Audio(audioAssets[sound]);
            audio.loop = true;
            const slider = document.querySelector(`.volume-slider[data-sound="${sound}"]`);
            audio.volume = slider ? slider.value : 0.5;
            audio.play().catch(e => console.log("Audio play blocked by browser. Click requested."));
            players[sound] = audio;
            btn.classList.remove('bg-[var(--color-surface)]');
            btn.classList.add('btn-primary');
        }
    }

    // Stop all sounds when overlay closes (called by timer.js)
    window.stopAllSounds = function() {
        Object.keys(players).forEach(key => {
            if (players[key]) {
                players[key].pause();
                players[key] = null;
            }
        });
        toggles.forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('bg-[var(--color-surface)]');
        });
    };
});
