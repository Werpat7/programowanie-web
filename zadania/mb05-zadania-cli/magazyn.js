import fs from "node:fs/promises";
import path from "node:path";

const sciezka = path.join(import.meta.dirname, "zadania.json");

/**
 * Wczytuje zadania z pliku JSON.
 * @returns {Promise<Array<{tekst: string, zrobione: boolean}>>} Tablica zadań.
 * @throws {Error} Gdy wystąpi błąd odczytu lub parsowania pliku inny niż ENOENT.
 */
export const wczytaj = async () => {
    try {
        const tekst = await fs.readFile(sciezka, "utf-8");
        return JSON.parse(tekst);
    } catch (blad) {
        if (blad.code === "ENOENT") {
            return [];
        }
        throw blad;
    }
};

/**
 * Zapisuje tablicę zadań do pliku JSON.
 * @param {Array<{tekst: string, zrobione: boolean}>} zadania Tablica zadań do zapisania.
 * @returns {Promise<void>} Obietnica zakończenia zapisu.
 */
export const zapisz = async (zadania) => {
    await fs.writeFile(sciezka, JSON.stringify(zadania, null, 2), "utf-8");
};