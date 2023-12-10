const express = require('express')
const { engine: expressHandlebars } = require('express-handlebars')

const fortune = require('./lib/fortune.js')

const app = express()

// Настройка представлений 
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

// Домашняя страница
app.get('/', (req, res) => res.render('home'))


// Страница О нас
app.get('/about', (req, res) => { 
    res.render('about', { fortune: fortune.getFortune() })
})

// Пользовательская страница 404
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

// Пользовательская страница 500
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; ` +
    'нажмите Ctrl+C для завершения.'))