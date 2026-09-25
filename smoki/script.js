const blok1 = document.querySelector('#blok1')
const blok2 = document.querySelector('#blok2')
const blok3 = document.querySelector('#blok3')



function zmiana1 () {
    blok1.style.backgroundcolor = 'mistyrose'
    blok2.style.backgroundcolor = '#FFAEA5'
    blok3.style.backgroundcolor = '#FFAEA5'

} 
blok1.addEventListener('click', zmiana1)
