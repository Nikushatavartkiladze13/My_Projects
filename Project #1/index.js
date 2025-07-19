
let task = document.getElementById("task")
let addButton = document.getElementById("add-button")
let taskDiv = document.getElementById("task-div-2")

let h3 = document.getElementById("h3")
taskDiv.style.display = "none"


addButton.addEventListener("click", function () {

    
    if (task.value != "") {
        taskDiv.style.display = "flex"
       
        h3.innerHTML = task.value
    } else {
        alert("Enter the task.")
    }
    task.value = ""
})





let check = document.getElementById("check")
let x = document.getElementById("x")


check.addEventListener("click", function () {
    if (check.checked) {
        h3.innerHTML = "Good Job ✅"
        h3.style.color = "green"
    } else {
        h3.innerHTML = "Not done ❌"
    }
})


x.addEventListener("click", function () {
    taskDiv.style.display = "none"
})
