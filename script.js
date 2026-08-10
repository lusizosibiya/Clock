function updateClock() {
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    const clock = document.getElementById("clock");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);