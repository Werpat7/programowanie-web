import { Router } from "express";
import {gry} from "../dane.js";

const router = Router();
// Metoda: GET
// Adres: /
// Przeznaczenie: Wyświetla stronę główną z listą dostępnych endpointów.

// Metoda: GET
// Adres: /gry
// Przeznaczenie: Zwraca listę wszystkich gier w formacie JSON.
router.get("/", (req, res) => {
    res.json(gry);
});

// Metoda: GET
// Adres: /gry/:id
// Przeznaczenie: Zwraca szczegółowe informacje o grze o podanym ID.
// Parametr URL: id – identyfikator gry.
router.get("/:id", (req, res) => {
    const gra = gry.find(g => g.id === Number(req.params.id));
    if(!gra){
        res.status(404).json({blad: "nie znaleziono takiej podstrony"})
        return;
    }
    res.json(gra);
});

export default router;