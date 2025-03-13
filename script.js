function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6; 

    document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minutes-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("seconds-hand").style.transform = `rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);
updateClock();