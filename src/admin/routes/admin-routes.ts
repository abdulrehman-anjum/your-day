import express from 'express'
import addQuestionPage from '../controllers/addQuestionPage'
import uploadImagePage from '../controllers/uploadImagePage'
import addQuestion from '../controllers/addQuestion'
import { multerUploads } from '../middlewares/multer'
import cloudinaryUploads from '../controllers/cloudinaryUploads'
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('admin')
})

router.get('/add-question', addQuestionPage)
router.post('/add-question', addQuestion)

router.get('/upload-image', uploadImagePage)
router.post('/upload-image', multerUploads, cloudinaryUploads)


export default router