function changeTime() {
    setInterval(resetTime, 1000);
}

function resetTime() {
    const today = new Date();
    const timing = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    document.getElementById("time").textContent = timing

}

changeTime()
