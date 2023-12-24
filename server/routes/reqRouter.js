const Router = require('express')
const router = new Router()
const reqController = require('../controllers/reqController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('ADMIN'), reqController.create)
router.get('/getAll', reqController.getAll)

module.exports = router