// Display current day of the week
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = new Date().getDay();
document.getElementById('dayOfWeek').textContent = days[currentDay];

// Display current UTC time
const utcTime = new Date().toUTCString().split(' ')[4];
document.getElementById('utcTime').textContent = `UTC Time: ${utcTime}`;