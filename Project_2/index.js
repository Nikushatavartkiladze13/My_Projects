let search = document.getElementById("search")
let form = document.getElementById("form")
let formDiv = document.getElementById("form-div")
search.addEventListener("click", function (e) {
    e.preventDefault()
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "flex"
        form.style.border = "1px solid #1f356b"
        form.appendChild(search)
    } else {
        form.style.display = "none"
        formDiv.appendChild(search)
    }
    
})