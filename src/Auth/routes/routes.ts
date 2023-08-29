import express, {Request, Response} from 'express'
import login                        from '../controllers/login'
import loginPage                    from '../controllers/login-page'
import welcomePage                  from '../controllers/welcome-page'
import logout                       from '../controllers/logout'
import byePage                      from '../controllers/bye-page'

const router = express.Router()

router.get('/login', loginPage)
router.post('/login', login, welcomePage)
router.get('/logout', logout, byePage)

export default router