const express = require('express')
const { engine: expressHandlebars } = require('express-handlebars')

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

const fortunes = [
    "Ставь на Зеро, не прогадаешь.",
    "Играй в Техас, шанс выиграть выше.",
    "Ставь всё на черное.",
    "Ставь всё на красное.",
    "Пять карт, можно поменять, можно докупить одну - это Русски поккер."
]

// Страница О нас
app.get('/about', (req, res) => { 
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', { fortune: randomFortune })
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