function checkTime(t){return t<10&&(t="0"+t),t}function startTime(){var t=new Date,a=t.getHours(),n=t.getMinutes();n=checkTime(n),document.getElementById("status-bar-clock").innerHTML="<p>"+a+":"+n+"</p>",setTimeout(startTime,500)}function key(t){"equals"!==lastCommand||isNaN(parseInt(t))?"equals"===lastCommand&&"."===t?(output="",total=["0"+t]):duplicates(t):(output="",total=[t]),fontSize(),output=total.join(""),display.innerHTML="<h2>"+output+"</h2>",lastCommand="not-equals"}function math(){longString=total.join(""),total=eval(longString),Math.round(total)!==total?(total=+total.toFixed(5),display.innerHTML="<h2>"+total+"</h2>",total=[total]):(display.innerHTML="<h2>"+total+"</h2>",total=[total]),fontSize(),lastCommand="equals"}function reset(){output="0",total=[""],fontSize(),display.innerHTML="<h2>0</h2>",lastCommand="not-equals"}function removeOne(){total.length<=1?(total.splice(total.length-1,1),display.innerHTML="<h2>0</h2>"):(total.splice(total.length-1,1),output=total.join(""),display.innerHTML="<h2>"+output+"</h2>"),fontSize()}function duplicates(t){var a=total[total.length-1];isNaN(parseInt(a))&&isNaN(parseInt(t))||total.push(t)}function fontSize(){var t=document.getElementById("display");total.length>8||output.length>8?t.className="smallest":t.className="larger"}function minus(){"minus"===lastCommand?(total.splice(total.length-1,1),display.innerHTML="<h2>"+output+"</h2>"):total.push("-"),output=total.join(""),display.innerHTML="<h2>"+output+"</h2>",lastCommand="minus"!==lastCommand?"minus":"not-equals"}startTime();var output="0",total=[""],longString=[],lastCommand,display=document.getElementById("display");reset();