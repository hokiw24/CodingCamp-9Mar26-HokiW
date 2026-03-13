// TIME & GREETING

function updateTime(){

const now = new Date()

document.getElementById("time").innerText =
now.toLocaleTimeString()

document.getElementById("date").innerText =
now.toDateString()

const hour = now.getHours()

let greeting = "Hello"

if(hour < 12) greeting = "Good Morning"
else if(hour < 18) greeting = "Good Afternoon"
else greeting = "Good Evening"

document.getElementById("greeting").innerText = greeting

}

setInterval(updateTime,1000)


// TIMER

let time = 1500
let timer

function startTimer(){

timer = setInterval(function(){

time--

let minutes = Math.floor(time/60)
let seconds = time%60

document.getElementById("timer").innerText =
minutes + ":" + (seconds<10?"0":"") + seconds

if(time<=0){
clearInterval(timer)
}

},1000)

}

function stopTimer(){
clearInterval(timer)
}

function resetTimer(){
time = 1500
document.getElementById("timer").innerText="25:00"
}


// TODO LIST

function addTask(){

const input = document.getElementById("taskInput")

const task = input.value

if(task==="") return

const li = document.createElement("li")

li.innerHTML =
task + " <button onclick='deleteTask(this)'>Delete</button>"

document.getElementById("taskList").appendChild(li)

saveTasks()

input.value=""

}

function deleteTask(btn){
btn.parentElement.remove()
saveTasks()
}

function saveTasks(){

localStorage.setItem(
"tasks",
document.getElementById("taskList").innerHTML
)

}

function loadTasks(){

document.getElementById("taskList").innerHTML =
localStorage.getItem("tasks") || ""

}

loadTasks()


// QUICK LINKS

function addLink(){

const name =
document.getElementById("linkName").value

const url =
document.getElementById("linkURL").value

if(name===""||url==="") return

const a = document.createElement("a")

a.href=url
a.innerText=name
a.target="_blank"

document.getElementById("linkContainer").appendChild(a)

saveLinks()

}

function saveLinks(){

localStorage.setItem(
"links",
document.getElementById("linkContainer").innerHTML
)

}

function loadLinks(){

document.getElementById("linkContainer").innerHTML=
localStorage.getItem("links")||""

}

loadLinks()