const przycisk = document.querySelector('#przycisk')



przycisk.addEventListener("click", (e) => {
    e.preventDefault()
  
    const miejsce = document.querySelector('#Mwycieczki').value
    const Ldoroslych = document.querySelector('#numer').value
    const Ldzieci = document.querySelector('#numer2').value
    const termin = document.querySelector("#data").value
    const radio = document.querySelector("input[type='radio']:checked").value

    const koszt = 1000 * (Ldoroslych / Ldzieci * 1.5)
    console.log(koszt)

    const koszta = document.querySelector("#koszta")
    const Dwycieczki = document.querySelector("#Dwycieczki")
    koszta.textContent = koszt
    Dwycieczki.textContent = termin
} )





