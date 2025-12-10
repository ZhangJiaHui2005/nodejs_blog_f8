const express = require('express')
const morgan = require('morgan')
const { engine: handlebars } = require('express-handlebars')
const path = require('path')

const app = express()
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan("combined"))

app.engine('hbs', handlebars({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})