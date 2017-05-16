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
var total = [""];
var longString = [];
var lastCommand;

// Dom Display
var display = document.getElementById('display');

// Start with 0 in display
reset();

// key inputs
function key(arg) {

    // if last command was equals and new arg is a number
    if(lastCommand === 'equals' && !isNaN(parseInt(arg))) {
        // clear the output to receive new calculation
        output = "";
        // and put the new arg in the total variable
        total = [arg];
    }
    // else if last command was equals and new comand is decimal point
    else if(lastCommand === 'equals' && arg === '.') {
        // clear the output to receive new calculation
        output = "";
        // and put the new arg in the total variable
        total = ['0' + arg];
    }
    else {
        // check for duplicates
        duplicates(arg);
    }
    
    // check length of display
    fontSize();
    // total.replace('÷', '/');
    output = total.join("");
    // update dom
    display.innerHTML = "<h2>" + output + "</h2>";
    // label last command as not being the equals operator
    lastCommand = 'not-equals';
}

function math() {
    // make long string one string from the total array
    longString = total.join("");
    // evaluate the maths
    total = eval(longString);
    if (Math.round(total) !== total) {
        // removes ending zeros with + before total.
        // then rounds to 5 decimal places if needs be.
        total = +total.toFixed(5);
        display.innerHTML = "<h2>" + total + "</h2>";
        total = [total];
    }
    else {    
        display.innerHTML = "<h2>" + total + "</h2>";
        total = [total];
    }


    // check length of display
    fontSize();

    // set the last command to equals to use when restarting new calc
    lastCommand = 'equals';
    
}

function reset() {
    output = "0";
    total = [""];
    fontSize();
    display.innerHTML = "<h2>0</h2>";

    lastCommand = 'not-equals';
}

function removeOne() {
    // if length of total array is smaller or equal to 1
    // then remove it and replace with a zero
    if (total.length <= 1) {
        total.splice((total.length - 1), 1);
        display.innerHTML = "<h2>0</h2>";
    }
    // if length of total array is larger than 1
    // then remove the last thing in total array
    else {
        total.splice((total.length - 1), 1);
        output = total.join("");
        display.innerHTML = "<h2>" + output + "</h2>";
    }
    fontSize();
}


function duplicates(arg) {
    var end = total[total.length - 1];
    // if the last thing in the array is not a number then do nothing.
    if (isNaN(parseInt(end)) && isNaN(parseInt(arg))) {
        return;
    }
    else {
        total.push(arg);
    }
}

function fontSize() {
    // if total array is less than 9 you can check for duplicates
    // and add it to the array.
    var h3 = document.getElementById('display');
    if (total.length > 8 || output.length > 8) {
        h3.className = "smallest";
    }
    else {
        h3.className = "larger";
    }
}