// Add zero in front of minutes if less than 10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Get Hours and Mins
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // Send mins to checktime incase it needs a zero
    m = checkTime(m);
    // Add to dom
    document.getElementById('status-bar-clock').innerHTML =
    "<p>" + h + ":" + m + "</p>";
    // Run every 500milliseconds
    setTimeout(startTime, 500);
}

startTime();

function key(num) {
    document.getElementById('display').innerHTML =
    "<h2>" + num + "</h2>";
}
