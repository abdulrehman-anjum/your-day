import express from 'express'
import loginPage from '../controllers/login-page'
import login from '../controllers/login'
import logout from '../controllers/logout'
import clearCookies from '../middlewares/clearCookies'
const router = express.Router()

router.get('/', (req, res)=>{res.redirect('back')})

router.get('/login', loginPage)
router.post('/login', login)
router.get('/logout', clearCookies, logout)

export default router