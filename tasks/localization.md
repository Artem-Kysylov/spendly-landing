Локализация лендинга Spendly — чеклист

1. Базовая архитектура i18n (next-intl v4) — выполнено
   - Добавить middleware для локалей: en, ru, uk, hi, ko, id, ja; defaultLocale: en; поддержка поддоменов/сегмента `[locale]`
   - Перенести структуру в `app/[locale]/layout.tsx` и обернуть приложение в `NextIntlClientProvider`
   - Сделать `<html lang={locale}>` динамическим в `app/[locale]/layout.tsx`

2. Структура переводов (`/locales/*.json`)
   - Разбить на неймспейсы: `common`, `nav`, `hero`, `features`, `howItWorks`, `pricing`, `why`, `founder`, `roadmap`, `demo`, `cta`, `faq`, `footer`, `legal`, `metadata`
   - Заполнить `en.json` как базу; далее RU, UK, HI, KO, ID, JA

3. Переключатель языка в хедере
   - Создать компонент селектора языков (Desktop: вместо кнопки CTA; Mobile: внутри бургер-меню)
   - Desktop: убрать кнопку `Get started for FREE` из хедера и разместить селектор рядом с `ThemeSwitcher`
   - Mobile: добавить селектор в бургер-меню, кнопку CTA оставить внизу меню
   - Переключение должно менять `[locale]` в URL и сохранять выбор (cookie)

4. Локализация Header навигации и контролов — выполнено
   - Тексты ссылок: `Features`, `How it works`, `Pricing`, `Why choose us`, `FAQ` — `components/layout/Header.tsx:35,38,41,44,47`
   - Кнопка CTA (будет вынесена): `components/layout/Header.tsx:56`
   - Мобильное меню: те же пункты — `components/layout/Header.tsx:89,92,95,98,101`
   - Alt логотипа: `Spendly Logo` — `components/layout/Header.tsx:24`
   - Метка переключателя темы (`aria-label`): `components/ui-elements/ThemeSwitcher.tsx:30`

5. Локализация Footer — выполнено
   - Навигация: `Features`, `How it works`, `Pricing`, `Why choose us`, `FAQ` — `components/layout/Footer.tsx:22–26`
   - Почта (оставить как есть), соцсети лейблы: `Linkedin`, `X` — `components/layout/Footer.tsx:35,38`
   - Политики: `Privacy Policy`, `Terms & Conditions` — `components/layout/Footer.tsx:45,46`
   - Копирайт: `Copyright. All rights reserved` — `components/layout/Footer.tsx:48`
   - Alt логотипа: `Spendly Logo` — `components/layout/Footer.tsx:13`

6. Hero секция — выполнено
   - Заголовок: `components/sections/Hero.tsx:11`
   - Сабтайтл (2 строки): `components/sections/Hero.tsx:12–13`
   - Кнопки: `Get started for FREE`, `Log in to Spendly` — `components/sections/Hero.tsx:15,16`
   - Alt изображения: `Dashboard image` — `components/sections/Hero.tsx:22`

7. Features секция — выполнено
   - Заголовок секции: `Spendly Features` — `components/sections/Features.tsx:9`
   - Табы: `AI-first`, `Core`, `Experience` — `components/sections/Features.tsx:12–14`
   - Пункты и описания: `AI Chat…`, `AI Insights…`, `Add expenses…`, `Recurring…`, `Budgets…`, `Light & dark themes`, `7 languages`, `Notifications` — `components/sections/Features.tsx:22–59`
   - Языки строкой `EN · RU · UA · KR · HI · ID · JP` — `components/sections/Features.tsx:55`
   - Alt изображений: `Spendly preview — AI/Core/Experience` — `components/sections/Features.tsx:67,70,73`

8. Demo секция (если включим)
   - Заголовок и сабтайтл: `components/sections/Demo.tsx:9–10`
   - Alt изображения: `Demo preview` — `components/sections/Demo.tsx:15`

9. How it works — выполнено
   - Заголовок секции: `components/sections/HowItWorks.tsx:7`
   - Шаги: заголовки и описания — `components/sections/HowItWorks.tsx:12–13,18–19,24–25,30–31`

10. Pricing — выполнено
   - Заголовок: `components/sections/Pricing.tsx:9`
   - План `Free`: заголовок и пункты — `components/sections/Pricing.tsx:13–21`
   - CTA: `Get started for FREE` — `components/sections/Pricing.tsx:23`
   - План `Pro — $7/mo`: заголовок и пункты — `components/sections/Pricing.tsx:27–35`
   - CTA: `Upgrade to Pro` — `components/sections/Pricing.tsx:37`
   - Учесть локализацию валюты/периода (`$7/mo`)

11. Why choose us — выполнено
   - Заголовок и буллиты — `components/sections/WhyChooseSpendly.tsx:8,13,17,21,25,29,33`
   - Alt изображения: `Spendly preview` — `components/sections/WhyChooseSpendly.tsx:39`

12. Founder — выполнено
   - Заголовок и длинный текст — `components/sections/Founder.tsx:10–11`
   - Alt изображения: `Artem - Creator of Spendly` — `components/sections/Founder.tsx:17`

13. Roadmap — выполнено
   - Заголовок: `components/sections/Roadmap.tsx:16`
   - Элементы массива `items`: `text`, `desc` — `components/sections/Roadmap.tsx:6–10,22–25`

14. FAQ — выполнено
   - Заголовок секции и 5 вопросов/ответов — `components/sections/Faq.tsx:8,12–47`

15. Юридические страницы
   - Privacy Policy: заголовок, разделы, формулировки — `app/privacy-policy/page.tsx:10–56`
   - Terms & Conditions: заголовок, разделы — `app/terms-and-conditions/page.tsx:11–111`
   - Локализовать дату: заменить `'en-US'` на текущую локаль — `app/privacy-policy/page.tsx:5`, `app/terms-and-conditions/page.tsx:4`
   - Доработать переводы контента разделов для всех локалей (RU, UK, HI, KO, ID, JA): заполнить ключи `privacy.*` и `terms.*`, адаптировать формулировки

16. SEO и метаданные
   - Локализовать `title`/`description`/`openGraph`/`twitter` — `app/layout.tsx:21–76`
   - Вынести в `generateMetadata` в `app/[locale]/layout.tsx` и подставлять строки из `metadata` неймспейса
   - Добавить hreflang/alternates для всех локалей

17. Атрибуты доступности
   - Локализовать `alt`, `aria-label`, `aria-current` (где текст) и подсказки

18. Форматирование чисел/валюты/дат
   - Использовать Intl для `$7/mo`, дат `Last updated` и т.п. согласно локали

19. Внедрение переводов в код — выполнено
   - Подключить `useTranslations` во всех секциях и заменить хардкоды на ключи неймспейсов
   - Не менять `id` секций/якорей (`#features` и т.д.)

20. Наполнение `/locales/*.json` — выполнено
   - Заполнить ключи для всех секций; провести QA на переносы/длину строк и верстку

21. Тестирование UI
   - Desktop/Mobile: проверить селектор языков, бургер-меню, сохранение выбора, корректность переключения URL
   - Просмотреть все 7 языков, проверить переносы и читабельность

22. Деплой и проверка
   - Обновить `NEXT_PUBLIC_SITE_URL` для каноникал/OG
   - Проверить sitemap/robots (если есть), валидность hreflang

Список языков для селектора (отображаемые названия): English (en), Русский (ru), Українська (uk), हिन्दी (hi), 한국어 (ko), Bahasa Indonesia (id), 日本語 (ja)