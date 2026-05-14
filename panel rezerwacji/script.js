const imie = document.querySelector('#imie')
const nazwisko = document.querySelector('#nazwisko')
const uslugi = document.querySelector('#usluga')
const dataa = document.querySelector('#dataa')
const godzina = document.querySelector('#godzina')
const przycisk = document.querySelector('#przycisk')
const ull = document.querySelector('ul')

const simie = document.querySelector('#simie')
const snazwisko = document.querySelector('#snazwisko')
const sdataa = document.querySelector('#sdata')
const sgodzina = document.querySelector('#sgodzina')
const sprzycisk = document.querySelector('#sprzycisk')

function rezerwacja () {
    if (imie.value == ""){
         simie.style.color = 'red'
        simie.textContent = 'Wpisz imie!' 
    }else if(nazwisko.value == ""){
        snazwisko.style.color = 'red'
        snazwisko.textContent = 'Wpisz nazwisko!'
    } else if(dataa.value == "" ){
        sdataa.style.color = 'red'
        sdataa.textContent = 'Wybierz date!'
    }else if(godzina.value == "" ){
        sgodzina.style.color = 'red'
       sgodzina.textContent = 'Wybierz godzine!'
    }else{
        sprzycisk.style.color = 'lightgreen'
        sprzycisk.textContent = 'Dodano rezerwacje!'
        ull.innerHTML += '<li>'+imie.value+' '+nazwisko.value+'|'+uslugi.value+'|'+dataa.value+' '+godzina.value+'</li>'
        simie.textContent = '' 
        snazwisko.textContent = ''
        sdataa.textContent = ''
        sgodzina.textContent = ''
    }
}
przycisk.addEventListener('click', rezerwacja)
