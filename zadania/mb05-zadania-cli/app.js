import {wczytaj, zapisz} from "./magazyn.js";

const [, , komenda, argument] = process.argv;

const lista = async() =>{
  const zadania = await wczytaj();

  if(zadania.length == 0){
    console.log("Brak zadań.");
  }
  else{
    zadania.forEach(({tekst, zrobione}, i) => {
      console.log(`${i + 1}: [${zrobione ? "x" : " "}] ${tekst}`);
    });
  }
}

const dodaj = async tekst =>{
  if(!tekst || tekst.trim() === ""){
    console.error("Nie podano żadnej wartości");
  }
  else{
    const zadania = await wczytaj();

    const nowe = [...zadania, { tekst, zrobione: false }];

    await zapisz(nowe);
    console.log(`Dodano ${tekst.trim()} do listy.`);    
  }
}

console.log("Komenda:", komenda);
console.log("Argument:", argument);

switch(komenda){
  case "lista":
    await lista();
    break;
  case "dodaj":
    await dodaj(argument);
    break;
}