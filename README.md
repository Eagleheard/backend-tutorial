npm install - установить зависимости
npm run start - запуск

Node.js, Express.js, PostgreSQL, Sequilize, Socket.IO

Структура файлов:
index.js - основной файл, в котором запускается сервер
папка Routes - внутренние файлы вызывают контроллер
папка Controller - основная папка, которая содержит файлы с классом. Этот класс обладает методами работы с данными. Асинхронные методы обращаются к моделям данных, возвращают их или модифицируют
папка Models - папка с моделями (таблицами БД), index отвечает за саму модель, а файл с именем модели содержит методы работы с моделью
папка Errors - папка, в которой написан middleware для вывода ошибок и разных кодов ошибок
