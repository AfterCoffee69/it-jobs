const Router = require('express')
const router = new Router()
const vacancyController = require('../controllers/vacansyController')

router.post('/create', vacancyController.create)
router.post('/edit', vacancyController.update)
router.get('/all/category', vacancyController.getAllCategory)
router.get('/getAll', vacancyController.getAllVacancy)
router.get('/getById/:id', vacancyController.getVacancyById)

module.exports = router