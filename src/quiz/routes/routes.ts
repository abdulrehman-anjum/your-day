import express from 'express'
import quizPage from '../controllers/quizPage'
import submitQuiz from '../controllers/getAnswer'
import result from '../controllers/result'
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('quiz-home')
})


router.get('/start/:qn?', quizPage)
router.get('/result', result)
router.post('/submit-quiz', submitQuiz)

export default router