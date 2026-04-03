function getLocalTzAbbrForClock() {
    try {
        const parts = Intl.DateTimeFormat(undefined, { timeZoneName: 'short' }).formatToParts(new Date());
        const tzPart = parts.find(p => p.type === 'timeZoneName');
        return tzPart ? tzPart.value : 'Local';
    } catch {
        return 'Local';
    }
}

function updateClocks() {
    const combined = document.getElementById('clocks-combined');
    if (!combined) return;

    const now = new Date();
    
    // 24hr format options
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    const localStr = now.toLocaleTimeString(undefined, options);
    const utcStr = now.toLocaleTimeString('en-US', { ...options, timeZone: 'UTC' });
    
    const tzName = getLocalTzAbbrForClock();

    combined.textContent = `${localStr} ${tzName} | ${utcStr} UTC`;
}

setInterval(updateClocks, 1000);
document.addEventListener('DOMContentLoaded', updateClocks);
