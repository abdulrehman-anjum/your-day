import express              from 'express'
import createChannelPage    from '../controllers/createChannelPage'
import createChannel        from '../controllers/createChannel'
import addQuestionPage      from '../controllers/addQuestionPage'
import uploadImagePage      from '../controllers/uploadImagePage'
import addQuestion          from '../controllers/addQuestion'
import createQuizPage       from '../controllers/createQuizPage'
import createQuiz           from '../controllers/createQuiz'
import quizPage             from '../controllers/quizPage'
import quizList             from '../controllers/quizList'
import { multerUploads }    from '../middlewares/multer'
import cloudinaryUploads    from '../controllers/cloudinaryUploads'
import sameUsernameChecker from '../middlewares/sameUsernameChecker'
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('admin')
})

//CHANNELS
router.get('/createChannel', createChannelPage)
router.post('/createChannel/quiz', createChannel) //save the channel and create a link
router.post('/createChannel/name', sameUsernameChecker) //save the channel and create a link

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