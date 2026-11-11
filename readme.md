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

# Uruchamianie:
npm run dev

# narzedzia:
github, vscode

testtest
dsfhsdhfgshdfgbdhb
