const express = require('express')
const morgan = require('morgan')
const { engine: handlebars } = require('express-handlebars')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan("combined"))

app.engine('hbs', handlebars({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})