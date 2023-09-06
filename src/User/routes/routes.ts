import express              from 'express'
import createChannelPage    from '../controllers/channels/createChannelPage'
import createChannel        from '../controllers/channels/createChannel'
import addQuestionPage      from '../controllers/quiz/addQuestionPage'
import addQuestion          from '../controllers/quiz/addQuestion'
import createQuizPage       from '../controllers/quiz/createQuizPage'
import createQuiz           from '../controllers/quiz/createQuiz'
import quizPage             from '../controllers/quiz/quizPage'
import quizList             from '../controllers/quiz/quizList'
import { multerUploads }    from '../middlewares/multer'
import sameUsernameChecker  from '../middlewares/sameUsernameChecker'
import channelList          from '../controllers/channels/channelList'
import createSlide          from '../controllers/slides/createSlide'
import createSlidePage      from '../controllers/slides/createSlidePage'
import slideList            from '../controllers/slides/slideList'
import slidePage            from '../controllers/slides/slidePage'
import addSlidePage         from '../controllers/slides/addSlidePage'
import addSlidePagePage     from '../controllers/slides/addSlidePagePage'
import addMediaPage         from '../controllers/media/addMediaPage'
import addMedia             from '../controllers/media/addMedia'
import imageList            from '../controllers/media/imageList'
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
router.get('/image-list', imageList)


export default router