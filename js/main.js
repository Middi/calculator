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

// create display 0
var display = "0";

function key(arg) {
// if 0 is in display or the argument 0 is passed into it clear the display
    if(display === "0" || arg === 0) {
        display = "";
    }
    
    //take the display and add the argument to it.
    display += arg;
    //print display to screen.
    document.getElementById('display').innerHTML =
    "<h2>" + display + "</h2>";
}

key(0);