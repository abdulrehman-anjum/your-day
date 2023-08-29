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
import channelList from '../controllers/channelList'
import createSlide from '../controllers/createSlide'
import createSlidePage from '../controllers/createSlidePage'
import slideList from '../controllers/slideList'
import slidePage from '../controllers/slidePage'
import addSlidePage from '../controllers/addSlidePage'
import addSlidePagePage from '../controllers/addSlidePagePage'
import addMediaPage from '../controllers/addMediaPage'
import addMedia from '../controllers/addMedia'
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('admin')
})

//CHANNELS
router.get('/channel-list', channelList)
router.get('/createChannel', createChannelPage)
router.post('/createChannel/quiz', createChannel) //save the channel and create a link
router.post('/createChannel/name', sameUsernameChecker) //save the channel and create a link

//SLIDE
router.get('/create-slide', createSlidePage)
router.post('/create-slide', createSlide)
router.get('/slide-list', slideList)
router.get('/slide/:slideId', slidePage) //pages <images, page-no, audio>
//pages
router.get('/slide/:slideId/add-slide-page', addSlidePagePage)
router.post('/slide/add-slide-page/:slideId', addSlidePage)
//media
router.get('/slide/:pageId/add-media', addMediaPage)
router.post('/slide/:pageId/add-media', multerUploads, addMedia)

//QUIZ
router.get('/create-quiz', createQuizPage)
router.post('/create-quiz', createQuiz)
router.get('/quiz-list', quizList)
router.get('/quiz/:quizId', quizPage)
//questions
router.get('/quiz/:quizId/add-question', addQuestionPage)
router.post('/quiz/add-question/:quizId', addQuestion)

//IMAGE
router.get('/upload-image', uploadImagePage)
router.post('/upload-image', multerUploads, cloudinaryUploads)


export default router