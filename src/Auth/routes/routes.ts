import express, {Request, Response} from 'express'
import loginPage from '../controllers/login-page'
import login from '../controllers/login'
import welcomePage from '../controllers/welcome-page'
import logout from '../controllers/logout'
import byePage from '../controllers/bye-page'

const router = express.Router()

router.get('/', (req: Request, res: Response)=>{res.redirect('back')})

router.get('/login', loginPage)
router.post('/login', login, welcomePage)

router.get('/quiz', (req, res)=>{res.redirect('/quiz')}) 

router.get('/logout', logout, byePage)

export default router