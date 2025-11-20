1. Установить зависимости — выполнено
   - Добавить `framer-motion` в проект: `npm i framer-motion`
   - Проверить совместимость с `lenis` (триггеры `whileInView` работают корректно при кастомном скролле)

2. Создать единые пресеты анимаций — выполнено
   - Определить пресет `fadeUp` (прозрачность 0 → 1, y: 24 → 0, ease: [0.22, 1, 0.36, 1], duration: 0.6)
   - Определить `fadeUpDelayed` (тот же паттерн, но с `delay` для последовательности)
   - Определить `fadeUpScale` для изображений (opacity 0 → 1, y: 24 → 0, scale: 0.98 → 1)
   - Включить `staggerChildren` на контейнерах секций
   - Учитывать `prefers-reduced-motion`: отключать анимации или использовать мгновенные переходы

3. Общие правила для секций — выполнено
   - Использовать `initial`, `whileInView`, `viewport={{ once: true, amount: 0.2 }}`
   - Для длинного контента — `viewport={{ margin: '0px 0px -10% 0px' }}`
   - Единые значения: `duration: 0.5–0.7`, `ease: [0.22, 1, 0.36, 1]`
   - Внутри списков: `staggerChildren: 0.06–0.1`

4. Hero — выполнено — `/components/sections/Hero.tsx`
   - Заголовок (`h1:13`) — `fadeUp`
   - Текст (`p:14–15`) — `fadeUp` c `delay: 0.05`
   - Контент: блок кнопок (`div:16–19`) — `fadeUpDelayed`; изображение (`Image:22–28`) — `fadeUpScale`

5. Features — выполнено — `/components/sections/Features.tsx`
   - Заголовок (`h2:11`) — `fadeUp`
   - Таб-бар — `containerStagger`
   - Текст в `TabsContent` — `containerStagger` + `fadeUp`
   - Изображения — `fadeUpScale`

6. How it works — выполнено — `/components/sections/HowItWorks.tsx`
   - Заголовок — `fadeUp`
   - Грид карточек — `containerStagger`; карточки — `fadeUp` с задержкой

7. Why choose us — выполнено — `/components/sections/WhyChooseSpendly.tsx`
   - Заголовок — `fadeUp`
   - Список — `containerStagger` + `fadeUp` на `li`
   - Изображение — `fadeUpScale`

8. Demo — выполнено — `/components/sections/Demo.tsx`
   - Заголовок — `fadeUp`
   - Подзаголовок — `fadeUp`
   - Изображение — `fadeUpScale`

9. Founder — выполнено — `/components/sections/Founder.tsx`
   - Текстовая колонка — `fadeUp`
   - Портрет — `fadeUpScale`

10. Pricing — выполнено — `/components/sections/Pricing.tsx`
   - Заголовок — `fadeUp`
   - Карточки — `containerStagger` + `fadeUp`

11. Roadmap — выполнено — `/components/sections/Roadmap.tsx`
   - Заголовок — `fadeUp`
   - Грид — `containerStagger`; пункты — `fadeUp`

12. FAQ — выполнено — `/components/sections/Faq.tsx`
   - Заголовок — `fadeUp`

13. Final CTA — выполнено — `/components/sections/Cta.tsx`
   - Заголовок — `fadeUp`
   - Кнопка — `fadeUpDelayed`
   - Подпись — `fadeUp`

14. Доступность и UX — выполнено
   - Уважать `prefers-reduced-motion`: добавлен `MotionConfig reducedMotion='user'` в `/app/[locale]/layout.tsx`
   - Исключить скачки layout: используются только `opacity`/`transform` без изменения размеров
   - Проверить фокусировку: семантика и структура сохранены, интерактивные элементы не меняли таб-индексацию

15. Производительность и проверка — частично выполнено
   - Включён `LazyMotion` (`domAnimation`) глобально для снижения бандла
   - Базовая проверка триггеров с `lenis` — ок, плавные входы при скролле
   - Оставшиеся действия: тонкая настройка `viewport`/задержек, прогон по всем локалям, мобильным девайсам