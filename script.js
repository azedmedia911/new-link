 function goToWhatsapp() {
    window.location.href="https://chat.whatsapp.com/K51SSvo6D7c0G284QvbbUj"
    
}
function goToWhatsapp() {
    const confirmJoin = confirm ("Do you want to join with anonymous?")
    if (confirmJoin) {
        window.location.href="https://chat.whatsapp.com/K51SSvo6D7c0G284QvbbUj"
    }
    else {
        console.log("you choose not to join");
    } 
}

  function updateDateTime() {
    const now = new Date();

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const timeString = `hours:{minutes}:seconds{ampm}`;

    document.getElementById('datetime').textContent = `dateString |{timeString}`;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
