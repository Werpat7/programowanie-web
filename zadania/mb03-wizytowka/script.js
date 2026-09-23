let umiejętności = ["zamiatanie", "programowanie", "psucie programów", "liczenie", "granie"];

let lista = document.querySelector("#lista-umiejetnosci");
for (i of umiejętności){
    punkt = document.createElement("li")
    punkt.textContent = i;
    lista.appendChild(punkt);
    console.log(punkt)
}