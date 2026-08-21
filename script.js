const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const formatToggle = document.getElementById("format-toggle");

let is24HourFormat = false;

function updateClock() {
    
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm;

    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }  

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    const clock = document.getElementById("clock");

    if (is24HourFormat) {
        clock.innerText = `${now.getHours().toString().padStart(2, "0")}:${minutes}:${seconds}`;
    } else {
        clock.innerText = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
    }

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    const dateElement = document.getElementById("date");
    dateElement.innerText = `${day}, ${month} ${date}, ${year}`;

}

    formatToggle.addEventListener("click", () => {
        is24HourFormat = !is24HourFormat;
        formatToggle.innerText = is24HourFormat ? "12hr" : "24hr";
    
        updateClock();
    });

    const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    themeToggle.innerText = isDarkMode ? "Light" : "Dark";
});

updateClock();
setInterval(updateClock, 1000);