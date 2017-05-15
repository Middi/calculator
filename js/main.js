// ---- Clock ---- //

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



// ---- Main Calculator ---- //

var output = "0";
var total = [];
var longString = [];
var display = document.getElementById('display');

reset();

function key(arg) {
    total.push(arg);
    console.log(total);
    output = total.join("");

    // total.replace('÷', '/');


    display.innerHTML = "<h2>" + output + "</h2>";
}

function math() {
    longString = total.join("");
    total = eval(longString);

    if (Math.round(total) !== total) {
        total = total.toFixed(5);
        display.innerHTML = "<h2>" + total + "</h2>";
        total = [total];
    }
    else {
        display.innerHTML = "<h2>" + total + "</h2>";
        total = [total];
    }

}

function reset() {
    output = "0";
    total = [];
    display.innerHTML = "<h2>0</h2>";
}