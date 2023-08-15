import { Request, Response }    from 'express'
import { answers }              from './getAnswer'
import results, { wrongCounter }from '../services/calcResult'
import Question                 from '../models/question'
import QuestionType             from '../types/question'
import { emptyAnswersArray }    from '../services/emptyAnswersArray'
import User                     from '../../Auth/models/user'
import { currentUser }          from '../../Auth/middlewares/refreshThisUser'
import { fetchedQuestions } from '../utils/questions'

const result = async (req: Request, res: Response)=>{
    const questions: QuestionType[] = fetchedQuestions
    const userAnswers = JSON.parse(JSON.stringify(answers)) as typeof answers //copying array:bcs we want original array be empty
    console.log("iser amserrr",userAnswers)
    emptyAnswersArray()
    console.log("iser amserrr",userAnswers)
    await results(userAnswers, questions) //complete calc result
    console.log("wrongCounter",wrongCounter)
    if (wrongCounter===0){
        await User.findByIdAndUpdate(currentUser._id, {identified: true})
        
        console.log("doneee true wrongcounter 0")
    }
    res.render('results', {results: userAnswers})
}

export default result