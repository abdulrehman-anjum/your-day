import path from 'path'
import express, {Application} from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
//image upload
import { cloudinaryConfig } from './utils/cloudinaryConfig'

//routes
import adminRoutes from './admin/routes/admin-routes'
import quizRoutes from './quiz/routes/routes'
import slideRoutes from './slide/routes/routes'
import authenticated from './utils/authenticated'

const app: Application = express()

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '..', 'views'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
//image upload
app.use('*', cloudinaryConfig)

app.use('/admin',authenticated, adminRoutes)
app.use('/quiz',authenticated, quizRoutes)
app.use('/slide',authenticated, slideRoutes)

app.get('/', (req, res)=>{
    res.render('index')
})

export default app