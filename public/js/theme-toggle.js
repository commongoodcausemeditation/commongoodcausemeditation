(function() {
    const root = document.documentElement;
    const themes = ['light', 'dark', 'zen'];
    const icons = {
        light: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />',
        dark: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />',
        zen: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />'
    };

    function setTheme(th) {
        root.setAttribute('data-theme', th);
        const iconEl = document.getElementById('theme-icon');
        if (iconEl) iconEl.innerHTML = icons[th] || icons.light;
        try { localStorage.setItem('theme', th); } catch(e) {}
    }

    function init() {
        const saved = localStorage.getItem('theme') || 'light';
        setTheme(saved);
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.onclick = () => {
                const cur = root.getAttribute('data-theme') || 'light';
                const next = themes[(themes.indexOf(cur) + 1) % themes.length];
                setTheme(next);
            };
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    // Prevent flash
    setTheme(localStorage.getItem('theme') || 'light');
})();
