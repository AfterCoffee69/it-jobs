const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const reqCategoryRouter = require('./requirementsCategoryRoute')
const reqRouter = require('./reqRouter')
const vacancyRouter = require('./vacansyRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/reqCategory', reqCategoryRouter)
router.use('/req', reqRouter)
router.use('/vacancy', vacancyRouter)

module.exports = router