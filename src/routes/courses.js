const express = require('express')
const CourseController = require('../app/controllers/CourseController')

const router = express.Router()

router.use('/', CourseController.index)

module.exports = router