import express, {Request, Response} from 'express'
import addQuestionPage from '../controllers/addQuestionPage'
import uploadImagePage from '../controllers/uploadImagePage'
import addQuestion from '../controllers/addQuestion'
import { dataUri, multerUploads } from '../middlewares/multer'
import { uploader } from '../../cloudinaryConfig'
const router = express.Router()


router.get('/', (req, res)=>{
    res.send(`
        <h1 align=center>Hi
        <br><a align=center href='/admin/add-question'>Add Question</a>
        </h1>
    `)
})

router.get('/add-question', addQuestionPage)
router.post('/add-question', addQuestion)

router.get('/upload-image', uploadImagePage)
router.post('/upload-image', multerUploads, (req: Request, res: Response)=>{

    if (req.file){
        const file = dataUri(req.file).content //remove content to turn off red line but its bad ithiknk
        console.log(file)
        return uploader.uploader.upload('file').then((result: { url: any })=>{
            const image = result.url
            return res.sendStatus(200).json({
                message: 'image uploaded',
                data: {
                    image
                }
            })
        }).catch((err: any)=> res.sendStatus(400).json({
            message: "something went wrong",
            data: {
                err
            }
        }))
    }
})


export default router