export function budujListe(tab) {
    return tab
        .map(({nazwa, poziom, kategoria}) =>
            `<li>${nazwa}, ${poziom}, ${kategoria}</li>`
        )
        .join("")
}


export function filtruj(tab, kategoria) {
    if (kategoria === "wszystkie") {
        return tab
    }

    return tab.filter(({kategoria: kat}) => kat === kategoria)
}


export function statystyki(tab) {
    let liczba = tab.length

    let suma = tab
        .reduce((suma, {poziom}) => suma + poziom, 0)

    let srednia = Math.round(suma / liczba)

    return `Umiejętności: ${liczba} średni poziom: ${srednia}`
}