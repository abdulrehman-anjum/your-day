let DEVMODE : boolean = false


import path from 'path'
import express, {Application} from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
//image upload
import { cloudinaryConfig } from './utils/cloudinaryConfig'

//routes
import homeRoutes from './home/routes/routes'
import authRoutes from './Auth/routes/routes'
import adminRoutes from './admin/routes/admin-routes'
import quizRoutes from './quiz/routes/routes'
import slideRoutes from './slide/routes/routes'
import authenticated from './Auth/services/authenticator'
import { stringify } from 'querystring' //* investigate this later
import putACookieInTheBrowser from './Auth/middlewares/startSession'
import refreshThisUser from './Auth/middlewares/refreshThisUser'
import quizAuth from './Auth/services/quiz-auth'

const app: Application = express()

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '..', 'views'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

//image upload
app.use('*', cloudinaryConfig)
//Custom Global Middlewares
app.use(putACookieInTheBrowser)
app.use(refreshThisUser) 

app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/quiz', quizAuth, quizRoutes)
app.use('/slide', authenticated, slideRoutes)
app.use('/admin', authenticated, adminRoutes)


//!!! explore 'express-session' ???????





//*DEV SIDE


    app.get('/logmyvalue', (req, res)=>{
        console.log(Date.now())
        res.redirect('/')
    })

    app.get('/devAuth', (req, res)=>{
        res.send(
            `
                <form action="/devAuth" method="post">
                    <input type="text" name="devAuth" placeholder='test your luck'>
                    <button type="submit">I AM A DEVELOPER</button>
                </form>

            `
        )
    })

    app.post('/devAuth', (req, res)=>{
        if (req.body?.devAuth === process.env.DEVAUTH){
            DEVMODE = true
            res.send(
                `
                    <h1><a href='/devAuth/cookies'>ALL COOKIES</a></h1>
                `
            )
        } else {
            DEVMODE=false
            res.send(
                `   
                    you are not a dev
                    <a href='/devAuth'>NO i am the real developer</a>
                `
            )
        }
    })

    app.get('/devAuth/cookies', (req ,res)=>{
        if (DEVMODE){
            const cookies = stringify(req.cookies)
            res.send(`
                ${cookies}
            `)
        } else {
            res.redirect('/devAuth')
        }
    })





export default app