# sklonuj repozytorium:
git clone https://github.com/Werpat7/programowanie-web.git programowanie-web

# programowanie aplikacji zaawansowanych webowych wersja glowna

repozytorium z zadaniami z przedmiotu

**Autor:** Wiesław B. klasa 4

# Technologie

# struktura repozytorium
serwery/
zadania/

# trasy
| metoda | adres | opis | odpowiedź |
|---|---|---|---|
| GET | `/` | Wyświetla stronę główną z listą dostępnych tras. | Strona HTML z linkami do endpointów. |
| GET | `/gry` | Pobiera listę wszystkich gier. | Tablica obiektów JSON zawierających dane gier. |
| GET | `/gry/:id` | Pobiera szczegółowe informacje o grze o podanym ID. | Obiekt JSON z danymi gry lub błąd 404, jeśli gra nie istnieje. |
| GET | `/szukaj` | Wyszukuje gry według parametrów query: `wydawca`, `max`, `gracze`. | Tablica obiektów JSON spełniających podane kryteria. |
| GET | `/statystyki` | Oblicza statystyki katalogu gier. | Obiekt JSON zawierający liczbę gier, średnią cenę i nazwę najdroższej gry. |

# Lista zadań

Program konsolowy napisany w JavaScript z wykorzystaniem Node.js. Umożliwia zarządzanie listą zadań, dodawanie nowych pozycji, wyświetlanie listy oraz oznaczanie zadań jako wykonane.

Dane przechowywane są w pliku `zadania.json` w formacie JSON.

## Struktura projektu

```text
projekt/
│
├── app.js          # Główny plik programu, obsługa komend
├── magazyn.js      # Odczyt i zapis danych
├── zadania.json    # Plik przechowujący zadania
└── package.json    # Konfiguracja projektu
```

## Skrypty

| Komenda | Opis | Przykład |
|---|---|---|
| `lista` | Wyświetla wszystkie zadania wraz z ich statusem. | `node app.js lista` |
| `dodaj` | Dodaje nowe zadanie do listy. | `node app.js dodaj "Nauka JavaScript"` |
| `zrobione` | Oznacza zadanie o podanym numerze jako wykonane. | `node app.js zrobione 1` |


# Uruchamianie:
npm run dev

# narzedzia:
github, vscode

testtest
dsfhsdhfgshdfgbdhb
