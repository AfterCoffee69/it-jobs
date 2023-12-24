const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('ADMIN'), categoryController.create)
router.post('/createVacansy', checkRole('ADMIN'), categoryController.createVacansy)
router.get('/', categoryController.getAll)
router.get('/delete/:id', categoryController.delete)
router.get('/delete/vCategory/:id', categoryController.delVacansyCateory)

router.get('/vacansyReq', categoryController.getAllCategoryVacansyReq)

module.exports = router