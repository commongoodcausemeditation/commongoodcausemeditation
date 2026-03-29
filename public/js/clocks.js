function updateClocks() {
    const combined = document.getElementById('clocks-combined');
    if (!combined) return;

    const now = new Date();
    
    // 24hr format options
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    
    const localStr = now.toLocaleTimeString('en-US', options);
    const utcStr = now.toLocaleTimeString('en-US', { ...options, timeZone: 'UTC' });
    
    // Get time zone abbreviation (e.g., IST)
    const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Kolkata' ? 'IST' : 'Local';

    combined.textContent = `${localStr} ${tzName} | ${utcStr} UTC`;
}

setInterval(updateClocks, 1000);
document.addEventListener('DOMContentLoaded', updateClocks);
