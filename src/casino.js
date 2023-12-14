const express = require('express')
const { engine: expressHandlebars } = require('express-handlebars')

const handlers = require('./lib/handlers')

const app = express()

// Настройка представлений 
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

// Домашняя страница
app.get('/', handlers.home)


// Страница О нас
app.get('/about', handlers.about)

// Пользовательская страница 404
app.use(handlers.notFound)

// Пользовательская страница 500
app.use(handlers.serverError)

app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; ` +
    'нажмите Ctrl+C для завершения.'))