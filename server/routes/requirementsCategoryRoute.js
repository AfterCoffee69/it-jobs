const Router = require('express')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')
const reqController = require('../controllers/requirementsCategoryController')

router.post('/create', checkRole('ADMIN'), reqController.create)

module.exports = router