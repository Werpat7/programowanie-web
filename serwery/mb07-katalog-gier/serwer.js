import express from "express";
import {gry} from "./dane.js"
import path from "node:path";

const app = express();

const logger = (req, res, next) => {
    req.czasZadania = new Date().toLocaleTimeString("pl-PL");
    console.log(`[${req.czasZadania}] ${req.method} ${req.url}`);
    next();
}
app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(logger);
// Metoda: GET
// Adres: /
// Przeznaczenie: Wyświetla stronę główną z listą dostępnych endpointów.

// Metoda: GET
// Adres: /gry
// Przeznaczenie: Zwraca listę wszystkich gier w formacie JSON.
app.get("/gry", (req, res) => {
    res.json(gry);
});

// Metoda: GET
// Adres: /gry/:id
// Przeznaczenie: Zwraca szczegółowe informacje o grze o podanym ID.
// Parametr URL: id – identyfikator gry.
app.get("/gry/:id", (req, res) => {
    const gra = gry.find(g => g.id === Number(req.params.id));
    if(!gra){
        res.status(404).json({blad: "nie znaleziono takiej podstrony"})
        return;
    }
    res.json(gra);
});

// Metoda: GET
// Adres: /szukaj
// Przeznaczenie: Wyszukuje i filtruje gry według podanych kryteriów.
// Parametry query:
// - wydawca – nazwa wydawcy gry.
// - max – maksymalna cena gry.
// - gracze – minimalna liczba graczy.
app.get("/szukaj", (req, res)=>{
    const {wydawca, max, gracze} = req.query;
    let gryFiltrowane = gry;

    if(wydawca){
        gryFiltrowane = gryFiltrowane.filter(g => g.wydawca.toLowerCase() === wydawca.toLowerCase())
    }
    if(max){
        gryFiltrowane = gryFiltrowane.filter(g => g.cena <= Number(max))
    }
    if(gracze){
        gryFiltrowane = gryFiltrowane.filter(g => g.gracze >= Number(gracze))
    }

    res.json(gryFiltrowane);
});

// Metoda: GET
// Adres: /statystyki
// Przeznaczenie: Zwraca statystyki katalogu gier:
// liczbę gier, średnią cenę oraz nazwę najdroższej gry.
app.get("/statystyki", (req, res) => {
    let ilGier = gry.length;

    let wynik = gry.reduce((acc, gra) => {
        acc.suma += gra.cena;

        if (gra.cena > acc.najdrozszaCena) {
            acc.najdrozszaCena = gra.cena;
            acc.najdrozszaNazwa = gra.nazwa;
        }

        return acc;
    }, {
        suma: 0,
        najdrozszaCena: 0,
        najdrozszaNazwa: ""
    });

    let srednia = Math.round((wynik.suma / ilGier) * 100) / 100;

    res.json({
        liczbaGier: ilGier,
        sredniaCena: srednia,
        najdrozsza: wynik.najdrozszaNazwa
    });
});

app.listen(3000, () => {
    console.log("Serwer działa: http://localhost:3000")
});