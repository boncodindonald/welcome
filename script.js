function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const minute = String(now.getMinutes()).padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    if (hour > 12) {
        hour -= 12;
    } else if (hour === 0) {
        hour = 12;
    }

    document.getElementById('hour').textContent = String(hour).padStart(2, '0');
    document.getElementById('minute').textContent = minute;
    document.getElementById('ampm').textContent = ampm;

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = monthsOfYear[now.getMonth()];
    const dayNum = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();

    document.getElementById('day').textContent = dayOfWeek;
    document.getElementById('month').textContent = month;
    document.getElementById('day-num').textContent = dayNum;
    document.getElementById('year').textContent = year;
}

setInterval(updateClock, 1000);
