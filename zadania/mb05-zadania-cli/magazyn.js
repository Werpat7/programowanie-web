import fs from "node:fs/promises";
import path from "node:path";

const sciezka = path.join(import.meta.dirname, "zadania.json");

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

export const zapisz = async (zadania) => {
    await fs.writeFile(sciezka, JSON.stringify(zadania, null, 2), "utf-8");
};
