# 🎭 Playwright Demo Framework

> Демонстрационный проект автоматизации тестирования для портфолио QA-инженера <br>
> **25 тестов • 99% стабильность**

[![CI](https://github.com/evgnikolaev/playwright-demo/actions/workflows/playwright.yml/badge.svg)](https://github.com/evgnikolaev/playwright-demo/actions)

## 🎯 Навыки

| Навык | Реализация |
|-------|-------------|
| Page Object Model | Строгий Page Object Model |
| Скриншотное тестирование | Docker + визуальная регрессия |
| Мокирование API | Изоляция фронтенда |
| Негативные сценарии | Валидация, ошибки |
| CI/CD | GitHub Actions |
| Docker | Воспроизводимое окружение |

**Стек:** Playwright • TypeScript • POM • GitHub Actions • Docker



## 🍕 Тестируемое приложение

[Cat Pizza Shop](https://github.com/osstep/cats-pizza) — учебный интернет-магазин «пиццы из котиков».<br>
> 📖 [Подробное описание тестируемого приложения](./APP_DESCRIPTION.md)




## 📋 Покрытие

**E2E:** навигация, каталог, корзина (CRUD), checkout, авторизация, оформление заказа  
**Негатив:** неверный пароль, пустые поля, пустая корзина, без авторизации  
**Визуальные:** главная, корзина, история заказов  
**API:** эндпоинты (cats, cart, orders)


## 📁 Архитектура тестов
<pre>
📁 <a href="./tests">tests/</a>
├── 📁 <a href="./tests/fixtures">fixtures/</a>                       # Кастомные фикстуры Playwright
├── 📁 <a href="./tests/pom">pom/</a>
│   ├── 📁 <a href="./tests/pom/api">api/</a>
│   │   └── 📁 <a href="./tests/pom/api/mockApi">mockApi/</a>                # Моки API для скриншотных тестов
│   ├── 📁 <a href="./tests/pom/data">data/</a>                       # Тестовые данные
│   ├── 📁 <a href="./tests/pom/mockData">mockData/</a>                   # Стабы для моковых ответов
│   ├── 📁 <a href="./tests/pom/pages">pages/</a>                      # Page Object Model
│   │   ├── 📄 <a href="./tests/pom/pages/AuthModal.ts">AuthModal.ts</a>
│   │   ├── 📄 <a href="./tests/pom/pages/CartPage.ts">CartPage.ts</a>
│   │   ├── 📄 <a href="./tests/pom/pages/CheckoutPage.ts">CheckoutPage.ts</a>
│   │   ├── 📄 <a href="./tests/pom/pages/HomePage.ts">HomePage.ts</a>
│   │   └── 📄 <a href="./tests/pom/pages/OrdersPage.ts">OrdersPage.ts</a>
│   └── 📁 <a href="./tests/pom/specs">specs/</a>                      # Тест-сьюты
│       ├── 📁 <a href="./tests/pom/specs/visualTests">visualTests/</a>            # Визуальная регрессия
│       ├── 🧪 <a href="./tests/pom/specs/auth.spec.ts">auth.spec.ts</a>            # Авторизация (позитив + негатив)
│       ├── 🧪 <a href="./tests/pom/specs/cart.spec.ts">cart.spec.ts</a>            # CRUD корзины
│       ├── 🧪 <a href="./tests/pom/specs/checkout.spec.ts">checkout.spec.ts</a>
│       ├── 🧪 <a href="./tests/pom/specs/home.spec.ts">home.spec.ts</a>
│       ├── 🧪 <a href="./tests/pom/specs/orders.guest.spec.ts">orders.guest.spec.ts</a>    # Гостевой сценарий
│       └── 🧪 <a href="./tests/pom/specs/orders.spec.ts">orders.spec.ts</a>          # Авторизованный сценарий
├── 📁 <a href="./tests/setup">setup/</a>                          # Pre-conditions (сохранение состояния авторизации)
└── ⚙️ <a href="./playwright.config.ts">playwright.config.ts</a>            # Конфигурация Playwright
</pre>


## 🚀 Быстрый старт


```bash
git clone https://github.com/evgnikolaev/playwright-demo
cd playwright-demo
npm install
npx playwright test          # все тесты
npm run test:ui              # интерактивный режим
```


Запуск приложения (для ручного тестирования)

```bash
# Frontend + Backend одновременно
npm run dev:all

# Frontend: http://localhost:5173
# Backend:  http://localhost:3001
```


Запуск скриншотных тестов в Docker 

```bash
# Запуск контейнера с монтированием текущей директории проекта
# где $(pwd) - локальный путь к пректу, например /Users/enikolaev/playwright-demo/
docker run -it --rm --ipc=host -v $(pwd):/pwuser mcr.microsoft.com/playwright:v1.59.1-noble /bin/bash

# Внутри контейнера:
cd pwuser/
npm ci
npx playwright test
```


  

##  📊 Отчетность и отладка
HTML-отчет с видео, скриншотами, трейсами — playwright-report/ (доступен в CI как artifact)





