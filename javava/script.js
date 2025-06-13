
const wynik = document.querySelector("#numer")
const siedem = document.querySelector("#siedem")
const osiem = document.querySelector("#osiem")
const dziewiec = document.querySelector("#dziewiec")
const piec = document.querySelector("#piec")
const cztery = document.querySelector("#cztery")
const szesc = document.querySelector("#szesc")
const jeden = document.querySelector("#jeden")
const dwa = document.querySelector("#dwa")
const trzy = document.querySelector("#trzy")
const zero = document.querySelector("#zero")
const reset = document.querySelector("#reset")

siedem.addEventListener("click", () => {
    wynik.value += "7"
})

osiem.addEventListener("click", () => {
    wynik.value += "8"
})

dziewiec.addEventListener("click", () => {
    wynik.value += "9"
})

cztery.addEventListener("click", () => {
    wynik.value += "4"
})

piec.addEventListener("click", () => {
    wynik.value += "5"
})

szesc.addEventListener("click", () => {
    wynik.value += "6"
})
jeden.addEventListener("click", () => {
    wynik.value += "1"
})
dwa.addEventListener("click", () => {
    wynik.value += "2"
})
trzy.addEventListener("click", () => {
    wynik.value += "3"
})
zero.addEventListener("click", () => {
    wynik.value += "0"
})
reset.addEventListener("click", () => {
    wynik.value = ""
})