let DEVMODE : boolean = false

import path from 'path'
import express, {Application} from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
//image upload
import { cloudinaryConfig } from './utils/cloudinaryConfig'

//routes
import authRoutes from './Auth/routes/routes'
import adminRoutes from './admin/routes/admin-routes'
import quizRoutes from './quiz/routes/routes'
import slideRoutes from './slide/routes/routes'
import authenticated, { restore, setRestoreValue } from './Auth/utils/cookie-authed'
import authenticatedAdmin from './Auth/utils/admin-authed'
import { stringify } from 'querystring'

const app: Application = express()

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '..', 'views'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
//image upload
app.use('*', cloudinaryConfig)

app.use('/auth', authRoutes)
app.use('/admin', authenticatedAdmin, adminRoutes)
app.use('/quiz',  authenticated,  quizRoutes)
app.use('/slide', authenticated, slideRoutes)


//!!! explore 'express-session' 


app.get('/', (req, res)=>{
    const restore2 = restore
    setRestoreValue(false)
    res.render('index', {mode: restore2?"login":"homepage"})
    }
)



//DEV SIDE
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