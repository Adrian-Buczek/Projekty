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
const podbt = document.querySelector('#podbt')


function nkontakt () {
    if(imie.value == ""){
        simie.style.color = 'red'
       
        simie.textContent = 'Wpisz imie!' 

    } else if(nazwisko.value == ""){
        snazwisko.style.color = 'red'
    
        snazwisko.textContent = 'Wpisz nazwisko!'
    } else if(nrtel.value == "" ){
        snrtel.style.color = 'red'

        snrtel.textContent = 'Wpisz numer telefonu!'

    } else if(nrtel.value.length < 9){
        snrtel.style.color = 'red'

        snrtel.textContent = 'Wpisz prawidłowy numer telefonu!'
    } else if(!mail.value.includes('@')){
        semail.style.color = 'red'

        semail.textContent = 'Wpisz prawidłowy adres email!'
    } else{
        podbt.style.color = 'lightgreen'
        podbt.textContent = 'Kontakt dodany!'
      ul.innerHTML += '<li>' +imie.value+nazwisko.value+'|'+nrtel.value+'|'+mail.value+'|'+grupa.value+'</li>'
    }


    
}
przycisk.addEventListener('click', nkontakt)