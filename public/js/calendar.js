// Add to Calendar Generator Support (.ics implementation)
document.addEventListener('DOMContentLoaded', () => {
    window.addToCalendar = function(title, description, utcTimeStr) {
        if (!utcTimeStr) {
            console.error("Missing UTC time constraint");
            return;
        }
        
        try {
            const startDate = new Date(utcTimeStr);
            // Default 25 min duration for standard meditations
            const endDate = new Date(startDate.getTime() + 25 * 60000);
            
            // iCal formats time as YYYYMMDDTHHMMSSZ
            const formatIcs = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
            
            const startStr = formatIcs(startDate);
            const endStr = formatIcs(endDate);
            const nowStr = formatIcs(new Date());
            
            // Clean description for iCal constraints (literal newlines)
            const uriCleaned = window.location.origin;
            const details = (description + "\\n\\nJoin the planetary synchronization at: " + uriCleaned)
                            .replace(/\n/g, '\\n')
                            .replace(/,/g, '\\,');
            
            const icsContent = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'PRODID:-//CommonGoodCauseMeditation//EN',
                'CALSCALE:GREGORIAN',
                'METHOD:PUBLISH',
                'BEGIN:VEVENT',
                `UID:sync-${startDate.getTime()}@commongoodcausemeditation.org`,
                `DTSTAMP:${nowStr}`,
                `DTSTART:${startStr}`,
                `DTEND:${endStr}`,
                `SUMMARY:Global Sync: ${title}`,
                `DESCRIPTION:${details}`,
                'END:VEVENT',
                'END:VCALENDAR'
            ].join('\r\n');
            
            // Generate a native virtual file prompt triggering OS-level default calendar handlers
            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `meditation-${startStr}.ics`);
            document.body.appendChild(link);
            link.click();
            
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }, 100);
        } catch (err) {
            console.error("Failed to generate generic calendar file.", err);
        }
    };
});
