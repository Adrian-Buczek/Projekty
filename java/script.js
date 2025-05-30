const przycisk = document.querySelector("#zmien")

przycisk.addEventListener("click", () => {
    const body = document.querySelector("body")
    body.classList.toggle("dark") 
})

