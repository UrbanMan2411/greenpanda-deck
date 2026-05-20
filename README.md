# GREEN PANDA · Presentation Deck

Полноэкранная интерактивная презентация B2B-бренда GREEN PANDA на React + Vite + Framer Motion + Tailwind.

## Запуск

```bash
cd deck
npm install
npm run dev
```

Сайт поднимется на http://localhost:4180

## Сборка

```bash
npm run build
npm run preview
```

## Навигация

| Что          | Как |
|--------------|-----|
| Вперёд       | `→`, `PageDown`, `Space`, колесо вниз, свайп влево, клик стрелки справа |
| Назад        | `←`, `PageUp`, колесо вверх, свайп вправо, клик стрелки слева |
| К слайду N   | Цифровые клавиши `1`–`9`, `0` = 10; клик по прогресс-точкам |
| Первый       | `Home` |
| Последний    | `End` |

## Экспорт

- **PNG** — кнопка справа сверху: скачает текущий слайд в PNG (через `html2canvas`, 2× scale).
- **PDF** — кнопка справа сверху: разворачивает все 13 слайдов в `print stack`, вызывает `window.print()`. В диалоге сохранения выберите «Сохранить как PDF», ориентацию **Landscape**, поля **None**. Print-CSS уже настроен под A4 landscape.

## Структура

```
deck/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx               # state + navigation + export
    ├── main.jsx
    ├── index.css             # tailwind + print CSS
    ├── data.js               # все тексты, KPI, ассортимент, контакты
    ├── components/
    │   ├── Brand.jsx         # SVG-логотип
    │   ├── Decoration.jsx    # горы, бамбук, солнце
    │   ├── Nav.jsx           # стрелки, прогресс, экспорт
    │   └── SlideShell.jsx    # обёртка слайда + GlassCard + SlideHead
    └── slides/
        ├── index.js          # реестр слайдов
        ├── S01_Title.jsx           — Титульный лист
        ├── S02_Market.jsx          — Рынок и тренды (KPI + 4 тренда)
        ├── S03_About.jsx           — О компании-производителе
        ├── S04_Mission.jsx         — Миссия и ценности
        ├── S05_Positioning.jsx     — Позиционирование и УТП (сравнение vs импорт)
        ├── S06_Audience.jsx        — Целевая аудитория (6 профилей)
        ├── S07_Channels.jsx        — Каналы продаж (с долями + прогресс-барами)
        ├── S08_Portfolio.jsx       — Ассортиментный портфель (6 SKU)
        ├── S09_Quality.jsx         — Контроль качества и сертификаты
        ├── S10_PartnerBenefits.jsx — Преимущества для партнёров (dark slide)
        ├── S11_Marketing.jsx       — Маркетинговая поддержка (6 типов)
        ├── S12_Roadmap.jsx         — Планы развития (timeline 2026–2028)
        └── S13_Contacts.jsx        — Контакты и приглашение (CTA «Давай дружить»)
```

## Контент

Все тексты и аналитика в `src/data.js`. Контакты (телефон, email, сайт, имя персонального менеджера) намеренно оставлены как `[ЗАМЕНИ: …]`-плейсхолдеры — заполните перед публикацией.

## Адаптация

Презентация рассчитана на 16:9. На устройствах с другим соотношением вписывается с тёмными полосами (letterbox). Сенсорные жесты включены — работает с tablet.
