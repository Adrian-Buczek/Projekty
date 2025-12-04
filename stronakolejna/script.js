const przycisk = document.querySelector('#przycisk')
const zawartosc = document.querySelector('#tekst')
const rozmiar = document.querySelector('#numer')
const kolor = document.querySelector('#kolor')
const tlo = document.querySelector('#tlo')
const szerokosc = document.querySelector('#szerokosc')
const wysokosc = document.querySelector('#wysokosc')
const kwadrat = document.querySelector('#kwadrat')

function zmianakwadratu (){
    const tekstt = zawartosc.value 
    kwadrat.innerText = tekstt
    const rozymiar = rozmiar.value
    kwadrat.style.fontSize = `${rozymiar}px` 
    const kolour = kolor.value
    kwadrat.style.color = kolour
    const tloo = tlo.value
    kwadrat.style.backgroundColor = tloo
    const szerokoscc = szerokosc.value
    kwadrat.style.width = `${szerokoscc}px`
    const wysokoscc = wysokosc.value
    kwadrat.style.heigth = `${wysokoscc}px`
}
przycisk.addEventListener('click', zmianakwadratu)