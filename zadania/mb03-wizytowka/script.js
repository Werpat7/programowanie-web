let umiejętności = ["zamiatanie", "programowanie", "psucie programów", "liczenie", "granie"]

let lista = document.querySelector("#lista-umiejetnosci")
for (i of umiejętności){
    punkt = document.createElement("li");
    punkt.textContent = i
    lista.appendChild(punkt)
    console.log(punkt)
}
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
        oknoZKomunikatem.style.color = "black"
        oknoZKomunikatem.textContent = `Przesłamo wiadomość od ${imie} o temacie ${temat}`
    }
});