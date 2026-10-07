import { umiejetnosci } from "./umiejetnosci.js"
import { budujListe, filtruj, statystyki } from "./dane.js"


let lista = document.querySelector("#lista-umiejetnosci")

lista.innerHTML = budujListe(umiejetnosci)

document.getElementById("sredniPoziom").innerHTML =
    statystyki(umiejetnosci)


document.getElementById("filtruj").addEventListener("click", () => {

    let wartosc = document.getElementById("filtrowanie").value

    let przefiltrowane = filtruj(umiejetnosci, wartosc)

    lista.innerHTML = budujListe(przefiltrowane)
})


const przeslij = document.getElementById("przeslij")

przeslij.addEventListener("submit", (event) => {

    event.preventDefault()

    let imie = document.getElementById("imie").value
    let email = document.getElementById("email").value
    let temat = document.getElementById("temat").value
    let wiadomosc = document.getElementById("wiadomosc").value

    let oknoZKomunikatem = document.getElementById("komunikat")

    if(imie == "" || email == "") {

        oknoZKomunikatem.style.color = "red"
        oknoZKomunikatem.textContent =
            "Proszę wypełnić pola imię oraz email"

    } else {

        oknoZKomunikatem.style.color = "green"
        oknoZKomunikatem.textContent =
            `Przesłano wiadomość od ${imie} o temacie ${temat}`

        przeslij.reset()
    }
})


const ciemny = document.getElementById("ciemny")

ciemny.addEventListener("click", () => {
    document.body.classList.toggle("ciemny")
})