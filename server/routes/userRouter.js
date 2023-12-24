const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/auth', authMiddleware, userController.ceck)
router.post('/addLeetcode', authMiddleware, userController.addLeetcodeUrl)
router.post('/addUserSkills', authMiddleware, userController.addUserSkill)
router.post('/res/create', authMiddleware, userController.addRes)
router.get('/:id', authMiddleware, userController.getUserDataById)


// router.post('/create', checkRole('ADMIN'), providerController.create)


module.exports = router