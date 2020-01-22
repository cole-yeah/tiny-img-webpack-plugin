const auth = require('../controllers/user')
const Router = require('koa-router')

const router = Router()

router.get('/user/:id', auth.getUserInfo)

module.exports = router