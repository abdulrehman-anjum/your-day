import path from 'path'
import express, {Application} from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
//routes
import adminRoutes from './admin/routes/admin-routes'
import quizRoutes from './quiz/routes/routes'
import slideRoutes from './slide/routes/routes'

const app: Application = express()
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '..', 'views'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/admin', adminRoutes)
app.use('/quiz', quizRoutes)
app.use('/slide', slideRoutes)

app.get('/', (req, res)=>{
    res.send(`
        <h1 align=center>Hi Person
        <br><a align=center href='/admin'>Admin</a>
        <br><a align=center href='/quiz'>Quiz</a>
        <br><a align=center href='/slide'>Slide</a>
        </h1>
    `)
})

export default app