import express from 'express'
import loginPage from '../controllers/login-page'
import login from '../controllers/login'
import logout from '../controllers/logout'
import startSession from '../middlewares/startSession'
const router = express.Router()

router.get('/', (req, res)=>{res.redirect('back')})

router.get('/login', loginPage)

router.post('/login', logout, login)

router.get('/logout', logout, (req, res)=>{
    res.render('message-to-user', 
    {
        message: 
            `
                Bye... LOGGED OUT SUCCESSFULLY 
            `,
        btnHref: "/auth/login",
        btnText: "Login Again"
    }
)
})

export default router