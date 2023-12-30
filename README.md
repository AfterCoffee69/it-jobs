## Гайд как запустить ##

Склонировать репозиторий 

Открыть папку проекта в VSCode

Открыть терминал, перейти в папку server (cd server)

Установить зависимости для сервера

```
npm i
```

Открыть еще одну вкладку терминала, перейти в папку client (cd client)

Установить зависимости для клиента

```
npm i
```

***Далее нужно заранее создать ПУСТУЮ БД в postgres или воспользоваться backUp-ом*** 

Теперь в папке server измените файл .env: Замените "NAME" и "PASSWORD"
на название созданной вами базы и ваш пароль от pgAdmin

```
PORT = 5000
DB_NAME = "NAME" 
DB_USER = postgres
DB_PASSWORD = "PASSWORD"
DB_HOST = localhost
DB_PORT = 5432
SECRET_KEY = random_key_123 
```

Запустить сервер

```
server~ npm run dev
```

Запустить клиент
```
client~ npm start
```



