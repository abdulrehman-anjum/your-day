import express              from 'express'
import addQuestionPage      from '../controllers/addQuestionPage'
import uploadImagePage      from '../controllers/uploadImagePage'
import addQuestion          from '../controllers/addQuestion'
import createQuizPage       from '../controllers/createQuizPage'
import createQuiz           from '../controllers/createQuiz'
import quizPage             from '../controllers/quizPage'
import quizList             from '../controllers/quizList'
import { multerUploads }    from '../middlewares/multer'
import cloudinaryUploads    from '../controllers/cloudinaryUploads'
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('admin')
})

//QUIZ
router.get('/create-quiz', createQuizPage)
router.post('/create-quiz', createQuiz)
router.get('/quiz-list', quizList)
router.get('/quiz/:quizId', quizPage)
router.get('/quiz/:quizId/add-question', addQuestionPage)
router.post('/quiz/add-question/:quizId', addQuestion)
//IMAGE
router.get('/upload-image', uploadImagePage)
router.post('/upload-image', multerUploads, cloudinaryUploads)


export default router