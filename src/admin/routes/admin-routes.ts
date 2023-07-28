import express from 'express'
import addQuestionPage from '../controllers/addQuestionPage'
import addQuestion from '../controllers/addQuestion'
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


export default router