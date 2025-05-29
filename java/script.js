let licznik = 0

const przycisk = document.querySelector("#inc")

przycisk.addEventListener("click", () => {
    console.info("CLICK")
    licznik = licznik + 1 
    console.info(licznik)
})

