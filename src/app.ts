import express, {Application} from 'express'
import ejs from 'ejs'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import routes from './routes/routes'

const app: Application = express()
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '..', 'views'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes)

export default app