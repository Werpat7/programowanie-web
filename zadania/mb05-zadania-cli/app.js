import {wczytaj, zapisz} from "magazyn.js";

const [, , komenda, argument] = process.argv;

const lista = async() =>{
  const zadania = await wczytaj();

  if(zadania.lenght == 0){
    console.log("Brak zadań.");
  }
  else{
    zadania.forEach(({tekst, zrobione}, i) => {
      console.log(`${i + 1}: [${zrobione ? "x" : " "}] ${tekst}`);
    });
  }

}

console.log("Komenda:", komenda);
console.log("Argument:", argument);

switch(komenda){
  case "lista":
    await lista();
    break;
}