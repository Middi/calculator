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

// Dom Display
var display = document.getElementById('display');

// Start with 0 in display
reset();


// key inputs
function key(arg) {
    // check for duplicates
    duplicates(arg);
    // total.replace('÷', '/');
    output = total.join("");
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

    // ================
    //  if next thing is an operator continue maths
    //  if not then reset output and total.
    // ================


    output = "0";
    total = [];

}

function reset() {
    output = "0";
    total = [];
    display.innerHTML = "<h2>0</h2>";
}

function removeOne() {
    if (total.length <= 1) {
        display.innerHTML = "<h2>0</h2>";
    }
    else {
        total.splice((total.length - 1), 1);
        output = total.join("");
        display.innerHTML = "<h2>" + output + "</h2>";
    }
}




function duplicates(arg) {
    if ((total[total.length - 1] === arg && arg === '.') || (total[total.length - 1] === arg && arg === '-') || (total[total.length - 1] === arg && arg === '*') || (total[total.length - 1] === arg && arg === '+') || (total[total.length - 1] === arg && arg === '/')) {
    }
    else {
        total.push(arg);
    }
}