class CourseController {
    index(req, res) {
        res.render('courses')
    }
}

module.exports = new CourseController