# core
Ядро Rezak

## Базовые модули
Основная логика ядра
- `metrics/` - метрики  *(пока пустуют)*
- `reducers/` - сокращатели *(реализации)*
- `selector.py` - модуль для получения выборки для текста
- `tokenizer.py` - модуль токенизирующий текст

## Обрабатывающие модули
Для БЛ плагина
- `colors.py` - модуль для получения цветовой палитры
- `summarizer.py` - модуль для сокращения текста на основании выборки, текста и порогового приоритета 