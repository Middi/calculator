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

var output = "";
var total = [];
var longString = [];
var display = document.getElementById('display');


function key(arg) {
    total.push(arg);
    console.log(total);
    output = total.join("");

    output.replace(/\//g, '÷');


    display.innerHTML = "<h2>" + output + "</h2>";
}

function math() {
    longString = total.join("");
    total = eval(longString).toFixed(5);
    // console.log(longString);
    display.innerHTML = "<h2>" + total + "</h2>";
    total = [total];
}

function reset() {
    output = "";
    total = [];
    display.innerHTML = "<h2>0</h2>";
}