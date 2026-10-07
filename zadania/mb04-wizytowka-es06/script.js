let umiejetnosci = [
    {nazwa:"HTML", poziom: 4, kategoria: "frontend"}, 
    {nazwa:"CSS", poziom: 3, kategoria: "frontend"}, 
    {nazwa:"SQL", poziom: 5, kategoria: "backend"},
    {nazwa:"Javascript", poziom: 2, kategoria: "frontend"},
    {nazwa:"granie", poziom: 5, kategoria: "odpoczywanie"}
]

let lista = document.querySelector("#lista-umiejetnosci")

lista.innerHTML = umiejetnosci
    .map(({nazwa, poziom, kategoria}) => `<li>${nazwa}, ${poziom}, ${kategoria}</li>`)
    .join("")

let listaUM = umiejetnosci
    .reduce(x => x += 1, 0)

let sumaPoziomow = umiejetnosci
    .reduce((suma, {poziom}) => suma += poziom, 0)

document.getElementById("sredniPoziom").innerHTML =
    `Umiejętności: ${listaUM} średni poziom: ${Math.round(sumaPoziomow / listaUM)}`

document.getElementById("filtruj").addEventListener("click", () => {

    let wartosc = document.getElementById("filtrowanie").value

    if (wartosc === "wszystkie") {
        lista.innerHTML = umiejetnosci
            .map(({nazwa, poziom}) => `<li>${nazwa} ${poziom}</li>`)
            .join("")
    }
    else {
        lista.innerHTML = umiejetnosci
            .filter(({kategoria}) => kategoria === wartosc)
            .map(({nazwa, poziom}) => `<li>${nazwa} ${poziom}</li>`)
            .join("")
    }
})

const przeslij = document.getElementById("przeslij")

przeslij.addEventListener("submit", (event)=>{
    event.preventDefault()
    let imie = document.getElementById("imie").value
    let email = document.getElementById("email").value
    let temat = document.getElementById("temat").value
    let wiadomosc = document.getElementById("wiadomosc").value
    let oknoZKomunikatem = document.getElementById("komunikat")

    if(imie == "" || email == ""){
        oknoZKomunikatem.style.color = "red"
        oknoZKomunikatem.textContent = "Proszę wypełnić pola imię oraz email"
    }
    else{
        oknoZKomunikatem.style.color = "green"
        oknoZKomunikatem.textContent = `Przesłano wiadomość od ${imie} o temacie ${temat}`
        przeslij.reset()
    }
})

const ciemny = document.getElementById("ciemny")

ciemny.addEventListener("click", ()=>{
    document.body.classList.toggle("ciemny")
})