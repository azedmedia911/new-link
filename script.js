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

  let year = now.getFullYear();
  let month = now.toLocaleString('default', { month: 'long' });
  let day = now.getDate();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let dateString = `year{month} day`;
  let timeString = `{hours}:minutes:{seconds} ampm`;

  document.getElementById('datetime').textContent = `{dateString} | ${timeString}`;
}

setInterval(updateDateTime, 1000);
updateDateTime(); 
