const przycisk = document.querySelector('#przycisk1')
const imie = document.querySelector('#imie')
const nazwisko = document.querySelector('#nazwisko')
const email = document.querySelector('#email')
const haslo = document.querySelector('#haslo')
const phaslo = document.querySelector('#phaslo')
const akapit = document.querySelector('#naglowek')

function sprdokladnosc () {
    const imiee = imie.value 
    const nazwiskoo = nazwisko.value 
    const emaill = email.value
    const hasloo = haslo.value 
    const pphaslo = phaslo.value
    
    if (imiee.length < 3 || nazwiskoo.length < 3 || emaill.length < 3 || pphaslo != hasloo || hasloo.length < 8){
        akapit.innerText = "Dane niepoprawne"
        akapit.classList.add('czerwony')
        akapit.classList.remove('zielony')
    }

    else{
        akapit.innerText = "dane poprawne"
        akapit.classList.add('zielony')
        akapit.classList.remove('czerwony')
    }
}
przycisk.addEventListener('click', sprdokladnosc)