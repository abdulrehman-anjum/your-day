import express              from 'express'
import createChannelPage    from '../controllers/channels/createChannelPage'
import createChannel        from '../controllers/channels/createChannel'
import addQuestion          from '../controllers/quiz/addQuestion'
import createQuiz           from '../controllers/quiz/createQuiz'
import quizPage             from '../controllers/quiz/quizPage'
import quizList             from '../controllers/quiz/quizList'
import { multerUploads }    from '../middlewares/multer'
import sameUsernameChecker  from '../middlewares/sameUsernameChecker'
import channelList          from '../controllers/channels/channelList'
import deleteChannel        from '../controllers/channels/deleteChannel'
import createSlide          from '../controllers/slides/createSlide'
import slideList            from '../controllers/slides/slideList'
import slidePage            from '../controllers/slides/slidePage'
import addSlidePage         from '../controllers/slides/addSlidePage'
import addMediaPage         from '../controllers/media/addMediaPage'
import addMedia             from '../controllers/media/addMedia'
import imageList            from '../controllers/media/imageList'
import deleteImage from '../controllers/media/delete-image'
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('admin')
})

//CHANNELS
router.get('/channel-list', channelList)
router.get('/createChannel', createChannelPage)
router.get('/deleteChannel/:id', deleteChannel)
router.post('/createChannel/quiz', createChannel) //save the channel and create a link
router.post('/createChannel/name', sameUsernameChecker) //save the channel and create a link

//SLIDE
router.get('/slide-list', slideList)
router.post('/create-slide', createSlide)
router.get('/slide/:slideId', slidePage) //list of pages <images, page-no, audio>
router.post('/slide/add-slide-page/:slideId', addSlidePage)
//media
router.get('/slide/:slideId/:pageId/add-media', addMediaPage)
router.post('/slide/:slideId/:pageId/add-media', multerUploads, addMedia)
router.get('/slide/:slideId/:pageId/x/:imageId', deleteImage)

//QUIZ
router.get('/quiz-list', quizList)
router.post('/create-quiz', createQuiz)
router.get('/quiz/:quizId', quizPage)
router.post('/quiz/add-question/:quizId', addQuestion)

//IMAGE
router.get('/image-list', imageList)


export default router