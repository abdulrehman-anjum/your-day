import express from 'express'
import quizPage from '../controllers/quizPage'
import submitQuiz from '../controllers/getAnswer'
import result from '../controllers/result'
const router = express.Router()

router.get('/', (req, res)=>{
    res.send(`
        <h1 align=center>Hi<br><a align=center href='/quiz/start/'>Quiz</a></h1>
    `)
})


router.get('/start/:qn?', quizPage)
router.get('/result', result)
router.post('/submit-quiz', submitQuiz)

export default router