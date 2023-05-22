const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
document.getElementById("time").textContent = time
