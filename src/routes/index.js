const newRouter = require('./courses')
const siteRouter = require('./site')

function route(app) {
    app.use('/courses', newRouter)
    app.use('/', siteRouter)
}

module.exports = route;