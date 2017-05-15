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
    // check length of display
    fontSize();
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

    fontSize();

}

function reset() {
    output = "0";
    total = [];
    fontSize();
    display.innerHTML = "<h2>0</h2>";
}

function removeOne() {
    if (total.length <= 1) {
        total.splice((total.length - 1), 1);
        display.innerHTML = "<h2>0</h2>";
    }
    else {
        total.splice((total.length - 1), 1);
        output = total.join("");
        display.innerHTML = "<h2>" + output + "</h2>";
    }
    fontSize();
}


function duplicates(arg) {
    var end = total[total.length - 1];
    if ((end === arg && arg === '.') || (end === arg && arg === '-') || (end === arg && arg === '*') || (end === arg && arg === '+') || (end === arg && arg === '/')) {
    }
    else {
        total.push(arg);
    }
}

function fontSize() {
    // if total array is less than 9 you can check for duplicates
    // and add it to the array.
    var h3 = document.getElementById('display');
    if (total.length > 8) {
        h3.className = "smallest";
    }
   
    else {
        h3.className = "larger";
    }
}