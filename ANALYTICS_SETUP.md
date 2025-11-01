# Konfiguracja Analytics (Microsoft Clarity & Google Analytics)

## 📋 Wymagane zmienne środowiskowe

Aby włączyć Microsoft Clarity i Google Analytics, musisz dodać następujące zmienne do pliku `.env.local` w katalogu głównym projektu:

```env
NEXT_PUBLIC_CLARITY_PROJECT_ID=twój-clarity-project-id
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🔍 Jak uzyskać ID projektów

### Microsoft Clarity

1. Zaloguj się do [Microsoft Clarity](https://clarity.microsoft.com/)
2. Utwórz nowy projekt lub wybierz istniejący
3. Skopiuj **Project ID** z ustawień projektu
4. Dodaj go do `.env.local` jako `NEXT_PUBLIC_CLARITY_PROJECT_ID`

### Google Analytics 4

1. Zaloguj się do [Google Analytics](https://analytics.google.com/)
2. Wybierz swoją właściwość (property)
3. Przejdź do **Admin** → **Data Streams**
4. Wybierz stream (lub utwórz nowy)
5. Skopiuj **Measurement ID** (format: `G-XXXXXXXXXX`)
6. Dodaj go do `.env.local` jako `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## ⚠️ Ważne

- Plik `.env.local` nie jest commitowany do repozytorium (jest w `.gitignore`)
- Analytics działają tylko w trybie **production** (`npm run build && npm run start` lub na Vercel)
- W trybie development (`npm run dev`) analytics są wyłączone

## 🚀 Weryfikacja

Po wdrożeniu na produkcję:
1. **Microsoft Clarity**: Sprawdź dashboard Clarity - powinieneś widzieć sesje
2. **Google Analytics**: Sprawdź Real-time reports w GA4 - powinieneś widzieć aktywnych użytkowników

