import express, {Request, Response} from 'express'
import login                        from '../controllers/login'
import loginPage                    from '../controllers/login-page'
import logout                       from '../controllers/logout'

const router = express.Router()

router.get('/login', loginPage)
router.post('/login', login)

router.get('/logout', logout)

export default router