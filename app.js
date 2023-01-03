const readBtn = document.getElementById("all-read-btn");
const content = document.querySelectorAll(".content")

readBtn.addEventListener("click", () => {
    content.forEach(con => {
        con.classList.remove("active")
    })
})