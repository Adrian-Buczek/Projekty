const imie = document.querySelector('#imie')
const nazwisko = document.querySelector('#nazwisko')
const nrtel = document.querySelector('#nrtel')
const mail = document.querySelector('#email')
const grupa = document.querySelector('#grupa')
const przycisk = document.querySelector('button')
const ul = document.querySelector('ul')
const simie = document.querySelector('#simie')
const snazwisko = document.querySelector('#snazwisko')
const snrtel = document.querySelector('#snrtel')
const semail = document.querySelector('#semail') 


function nkontakt () {

    ul.innerHTML += '<li>' +imie.value+''+nazwisko.value+nrtel.value+mail.value+grupa.value+'</li>'
}
przycisk.addEventListener('click', nkontakt)