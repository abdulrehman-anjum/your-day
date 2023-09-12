import path                     from 'path'
import express, { Application } from 'express'
import page404                  from './utils/404'
//npm-packages
import bodyParser               from 'body-parser'
import cookieParser             from 'cookie-parser'
//global-middlewares
import { cloudinaryConfig }     from './utils/cloudinaryConfig'
import ourSessionCookie         from './Auth/middlewares/startSession'
import refreshThisUser          from './Auth/middlewares/refreshThisUser'
//route-middlewares
import authenticator            from './Auth/services/authenticator'
import slideAuth                from './Auth/services/slide-auth'
//routes
import slideRoutes              from './slide/routes/routes'
import authRoutes               from './Auth/routes/routes'
import userRoutes               from './User/routes/routes'
import homeRoutes               from './home/routes/routes'
import quizRoutes               from './quiz/routes/routes'

const app: Application = express(); export default app

app.use(express.json());app.use(cookieParser());app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.set('views', path.resolve(__dirname, '..', 'views'))
app.use(bodyParser.urlencoded({extended: true}))

app.use(ourSessionCookie);app.use(refreshThisUser) 
app.use('*', cloudinaryConfig)

app.use('/', homeRoutes) //home routes
app.use('/a', authRoutes) //auth routes
app.use('/u', authenticator, userRoutes) //user routes
app.use('/q', authenticator, quizRoutes) // quiz routes
app.use('/s', slideAuth, slideRoutes) //slide routes



//*::::::::::::::::::::::::::::::::::::::::
app.get('/logmyvalue', (req, res)=>{
    console.log(Date.now());res.redirect('/')
    const array = [2, 34, 3]
    if (true){
        console.log(array.includes(21), "huzzah")
    }
})
// *404 page //always write it on the end
app.use(page404)