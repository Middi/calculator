function checkTime(e){return e<10&&(e="0"+e),e}function startTime(){var e=new Date,t=e.getHours(),n=e.getMinutes();n=checkTime(n),document.getElementById("status-bar-clock").innerHTML="<p>"+t+":"+n+"</p>",setTimeout(startTime,500)}function key(e){document.getElementById("display").innerHTML="<h2>"+e+"</h2>"}startTime();