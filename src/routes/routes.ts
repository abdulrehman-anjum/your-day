import express, {Request, Response} from 'express'
import home from '../controllers/home'
import mainQuiz from '../controllers/mainQuiz'
import result from '../controllers/result'

const router = express.Router()

router.get('/q/:qn?', home)
router.get('/result', result)

router.post('/main-quiz', mainQuiz)

router.get("/data", (req, res)=>{
    res.send({
        'data': "jsonn"
    })
})


export default router