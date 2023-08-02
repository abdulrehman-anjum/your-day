import express, {Request, Response} from 'express'
import addQuestionPage from '../controllers/addQuestionPage'
import uploadImagePage from '../controllers/uploadImagePage'
import addQuestion from '../controllers/addQuestion'
import { dataUri, multerUploads } from '../middlewares/multer'
import { uploader } from '../../cloudinaryConfig'
import result from '../../quiz/controllers/result'
const router = express.Router()


router.get('/', (req, res)=>{
    res.send(`
        <h1 align=center>Hi
        <br><a align=center href='/admin/add-question'>Add Question</a>
        <br><a align=center href='/admin/upload-image'>Upload Image</a>
        </h1>
    `)
})

router.get('/add-question', addQuestionPage)
router.post('/add-question', addQuestion)

router.get('/upload-image', uploadImagePage)
router.post('/upload-image', multerUploads, async (req: Request, res: Response)=>{

    if (req.file){
        const file = await dataUri(req.file)
        const cont: string = file?.content?.toString()? file?.content?.toString(): ""
        console.log(cont, "this the file2480")

        try {
            await uploader.uploader.upload(cont).then(result => {
                const image = result.url;
                console.log(image);
                res.send("image uploaded");
            });
        } catch (error) {
            console.error("Error uploading image:", error);
            res.status(500).send("Image upload failed");
        }
    }
})


export default router