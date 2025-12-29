 function goToWhatsapp() {
    window.location.href="https://chat.whatsapp.com/K51SSvo6D7c0G284QvbbUj"
}
function goToWhatsapp() {
    const confirmJoin = confirm ("Do you want to join with anonymous?")
    if (confirmJoin) {
        window.location.href="https://chat.whatsapp.com/K51SSvo6D7c0G284QvbbUj"
    } else {
        console.log("you choose not to join");
    } }

function updateClock() {
    const now = new Date(); 

    const date = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const clockDisplay = `${date}<br>${time}`;

    
    document.getElementById('clock').innerHTML = clockDisplay;
}
updateClock();

setInterval(updateClock, 1000);

