const readBtn = document.getElementById("all-read-btn");
const content = document.querySelectorAll(".content")
const notif = document.getElementById("notif");


readBtn.addEventListener("click", () => {
    notif.innerText = "0"
    
    content.forEach(con => {
        con.classList.remove("active")
    })
})
