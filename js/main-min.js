function checkTime(t){return t<10&&(t="0"+t),t}function startTime(){var t=new Date,e=t.getHours(),o=t.getMinutes();o=checkTime(o),document.getElementById("status-bar-clock").innerHTML="<p>"+e+":"+o+"</p>",setTimeout(startTime,500)}function key(t){fontSize(),duplicates(t),output=total.join(""),display.innerHTML="<h2>"+output+"</h2>"}function math(){longString=total.join(""),total=eval(longString),Math.round(total)!==total?(total=total.toFixed(5),display.innerHTML="<h2>"+total+"</h2>",total=[total]):(display.innerHTML="<h2>"+total+"</h2>",total=[total]),output="0",total=[],fontSize()}function reset(){output="0",total=[],fontSize(),display.innerHTML="<h2>0</h2>"}function removeOne(){total.length<=1?(total.splice(total.length-1,1),display.innerHTML="<h2>0</h2>"):(total.splice(total.length-1,1),output=total.join(""),display.innerHTML="<h2>"+output+"</h2>"),fontSize()}function duplicates(t){var e=total[total.length-1];e===t&&"."===t||e===t&&"-"===t||e===t&&"*"===t||e===t&&"+"===t||e===t&&"/"===t||total.push(t)}function fontSize(){var t=document.getElementById("display");total.length>8?t.className="smallest":t.className="larger"}startTime();var output="0",total=[],longString=[],display=document.getElementById("display");reset();