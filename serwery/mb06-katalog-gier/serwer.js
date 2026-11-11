import express from "express";
import {gry} from "./dane.js"

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Katalog gier planszowych</h1>
        <ul>
            <li><a href="/gry">/gry</a> - wszystkie gry</li>
            <li><a href="/gry/1">/gry/:id</a> - jedna gra</li>
            <li><a href="/szukaj?max=150">/szukaj</a> - wyszukiwanie</li>
            <li><a href="/statystyki">/statystyki</a> - podsumowanie</li>
        </ul>`
        );
});

app.get("/gry", (req, res) => {
    res.json(gry);
});

app.get("/gry/:id", (req, res) => {
    const gra = gry.find(g => g.id === Number(req.params.id));
    if(!gra){
        res.status(404).json({blad: "nie znaleziono takiej podstrony"})
        return;
    }
    res.json(gra);
});

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