# sklonuj repozytorium:
git clone https://github.com/Werpat7/programowanie-web.git programowanie-web

# programowanie aplikacji zaawansowanych webowych wersja glowna

repozytorium z zadaniami z przedmiotu

**Autor:** Wiesław B. klasa 4

# Technologie

# struktura repozytorium
serwery/
zadania/

# Katalog gier planszowych

Aplikacja serwerowa napisana w JavaScript z wykorzystaniem Node.js i Express.js. Umożliwia przeglądanie katalogu gier planszowych, wyszukiwanie ich według określonych kryteriów oraz wyświetlanie statystyk.

Program obsługuje również przesyłanie danych metodą POST, logowanie żądań oraz obsługę błędów HTTP.

## Uruchomienie

1. Zainstaluj zależności:

```bash
npm install
```

2. Uruchom serwer:

```bash
node app.js
```

3. Otwórz przeglądarkę i przejdź pod adres:

```text
http://localhost:3000
```

## Struktura projektu

```text
projekt/
│
├── app.js              # Główny plik aplikacji
├── dane.js             # Dane gier
├── trasy/
│   └── gry.js          # Router obsługujący trasy gier
│
├── public/             # Pliki statyczne
│
├── package.json        # Konfiguracja projektu
└── package-lock.json   # Wersje zainstalowanych zależności
```

## Trasy

| Metoda | Adres | Opis | Odpowiedź |
|---|---|---|---|
| GET | `/gry` | Pobiera wszystkie gry. | Tablica obiektów JSON. |
| GET | `/gry/:id` | Pobiera grę o podanym identyfikatorze. | Obiekt JSON lub błąd 404. |
| GET | `/szukaj` | Wyszukuje gry według podanych kryteriów. | Tablica przefiltrowanych gier JSON. |
| GET | `/statystyki` | Wyświetla statystyki katalogu gier. | Liczba gier, średnia cena, najdroższa gra i czas wygenerowania. |
| POST | `/echo` | Odbiera przesłane dane i zwraca je w odpowiedzi. | Obiekt JSON z odebranymi danymi. |
| GET | `/blad` | Wywołuje testowy błąd serwera. | Błąd 500 w formacie JSON. |

### Parametry wyszukiwania `/szukaj`

| Parametr | Opis | Przykład |
|---|---|---|
| `wydawca` | Nazwa wydawcy gry. | `?wydawca=Rebel` |
| `max` | Maksymalna cena gry. | `?max=150` |
| `gracze` | Minimalna liczba graczy. | `?gracze=2` |

Parametry można łączyć, np.:

```text
/szukaj?wydawca=Rebel&max=150&gracze=2
```

## Middleware

| Middleware | Przeznaczenie |
|---|---|
| `express.json()` | Umożliwia odczytywanie danych przesłanych w formacie JSON. |
| `express.urlencoded({extended: true})` | Umożliwia odczytywanie danych przesłanych formularzem URL-encoded. |
| `express.static()` | Udostępnia pliki statyczne z folderu `public`. |
| `logger` | Zapisuje czas, metodę i adres każdego obsługiwanego żądania w konsoli. Dodatkowo zapisuje czas w `req.czasZadania`. |

## Obsługa błędów

Aplikacja posiada dwa rodzaje obsługi błędów:

**404 – Nie znaleziono trasy**

- Dla nieistniejących tras związanych z danymi zwracany jest komunikat JSON.
- Dla pozostałych nieistniejących adresów zwracana jest strona HTML z informacją o błędzie 404.

**500 – Błąd serwera**

- Przechwytuje błędy przekazane do middleware obsługi błędów.
- Wyświetla szczegóły błędu w konsoli serwera.
- Zwraca odpowiedź JSON z komunikatem o błędzie serwera.

Do testowania obsługi błędu 500 służy trasa `/blad`.

# narzedzia:
github, vscode