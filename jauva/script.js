let licznik = 0

const wynik = document.querySelector("#licznik")
const dodaj = document.querySelector("#dodaj")
const reset = document.querySelector("#reset")
const odejmij = document.querySelector("#odejmij")

dodaj.addEventListener("click", () => {
    licznik = licznik + 1
    wynik.textContent = licznik
})
reset.addEventListener("click", () => {
    licznik = 0
    wynik.textContent = licznik
})
odejmij.addEventListener("click", () => {
    licznik = licznik - 1
    wynik.textContent = licznik
})
dodaj.addEventListener("dblclick", () => {
    licznik = licznik + 10
    wynik.textContent = licznik

})














