function getLocalTzAbbrForClock() {
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
