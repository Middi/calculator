function checkTime(t){return t<10&&(t="0"+t),t}function startTime(){var t=new Date,e=t.getHours(),n=t.getMinutes();n=checkTime(n),document.getElementById("status-bar-clock").innerHTML="<p>"+e+":"+n+"</p>",setTimeout(startTime,500)}function key(t){total.push(t),console.log(total),output=total.join(""),output.replace(/\//g,"÷"),display.innerHTML="<h2>"+output+"</h2>"}function math(){longString=total.join(""),total=eval(longString),display.innerHTML="<h2>"+total+"</h2>",total=[total]}function reset(){output="",total=[],display.innerHTML="<h2>0</h2>"}startTime();var output="",total=[],longString=[],display=document.getElementById("display");