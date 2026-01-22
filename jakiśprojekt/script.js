const Imie = document.querySelector('#imie')
const nazwisko = document.querySelector('#nazwisko')
const wyslij = document.querySelector('#wyslij')
const kom = document.querySelector('#komunikat')

const liczbaa = document.querySelector('#PL')
const liczba2 = document.querySelector('#DL')
const oblic = document.querySelector('#oblicz')
const wynik = document.querySelector('#wynik')







function komunikat () {

    kom.innerText = 'Witaj ' + Imie.value + nazwisko.value ;
    kom.style.border = '2px dashed black';
    kom.style.padding = '10px';

}
wyslij.addEventListener('click', komunikat)

function kalkulator () {
    wynik.innerText = 'Wynik: ' + (Number(liczbaa.value) + Number(liczba2.value));
    wynik.style.border = '2px dashed black';
    wynik.style.padding = '10px';
}
oblic.addEventListener('click', kalkulator)