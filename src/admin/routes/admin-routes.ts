import express          from 'express'
import addQuestionPage  from '../controllers/addQuestionPage'
import uploadImagePage  from '../controllers/uploadImagePage'
import addQuestion      from '../controllers/addQuestion'
import createQuizPage   from '../controllers/createQuizPage'
import createQuiz       from '../controllers/createQuiz'
import quizPage         from '../controllers/quizPage'
import quizList         from '../controllers/quizList'
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('admin')
})


router.get('/create-quiz', createQuizPage)
router.post('/create-quiz', createQuiz)
router.get('/quiz-list', quizList)
router.get('/add-question/quiz/:quizId', quizPage)
router.get('/add-question/quiz/:quizId/add-question', addQuestionPage)
router.post('/add-question/quiz/:quizId', addQuestion)

router.get('/upload-image', uploadImagePage)
// router.post('/upload-image', multerUploads, cloudinaryUploads)


export default router