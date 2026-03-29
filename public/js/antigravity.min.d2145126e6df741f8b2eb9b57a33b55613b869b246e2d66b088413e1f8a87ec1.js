document.addEventListener("DOMContentLoaded",()=>{initTimeConversion(),initHeroCountdown()});function initTimeConversion(){const e=document.querySelectorAll("[data-utc-time]");e.forEach(e=>{const n=e.getAttribute("data-utc-time"),t=new Date(n);if(isNaN(t.getTime()))return;const s={hour:"2-digit",minute:"2-digit",hour12:!0,timeZoneName:"short"},o=t.toLocaleTimeString(0[0],s);e.textContent=o,e.title=`UTC: ${t.toUTCString()}`})}function initHeroCountdown(){const e=document.getElementById("hero-countdown");if(!e)return;const n=new Date(e.getAttribute("data-target-time"));function t(){const s=new Date,t=n-s;if(t<=0){e.textContent="SESSION IN PROGRESS";return}const o=Math.floor(t/(1e3*60*60*24)),i=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),a=Math.floor(t%(1e3*60*60)/(1e3*60)),r=Math.floor(t%(1e3*60)/1e3);e.innerHTML=`
            <div class="flex gap-4 text-center">
                <div><span class="text-3xl font-bold">${o}</span><p class="text-[8px] uppercase">Days</p></div>
                <div><span class="text-3xl font-bold">${i}</span><p class="text-[8px] uppercase">Hrs</p></div>
                <div><span class="text-3xl font-bold">${a}</span><p class="text-[8px] uppercase">Min</p></div>
                <div><span class="text-3xl font-bold">${r}</span><p class="text-[8px] uppercase">Sec</p></div>
            </div>
        `}t(),setInterval(t,1e3)}