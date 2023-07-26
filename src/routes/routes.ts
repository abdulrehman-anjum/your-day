import express from 'express'
import quizPage from '../controllers/quizPage'
import mainQuiz from '../controllers/getAnswer'
import result from '../controllers/result'
const router = express.Router()

router.get('/', (req, res)=>{
    res.send(`
        <h1 align=center>Hi<br><a align=center href='/quiz'>Quiz</a></h1>
    `)
})


router.get('/quiz/:qn?', quizPage)
router.get('/result', result)
router.post('/main-quiz', mainQuiz)

export default router