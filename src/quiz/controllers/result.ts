import { Request, Response }    from 'express'
import { answers }              from './getAnswer'
import results, { wrongCounter }from '../services/calcResult'
import QuestionType             from '../types/question'
import { emptyAnswersArray }    from '../services/emptyAnswersArray'
import User                     from '../../Auth/models/user'
import { currentUser }          from '../../Auth/middlewares/refreshThisUser'
import { fetchedQuestions, setQuizQuestions } from '../utils/questions'
import { channel } from '../../User/controllers/channels/linkHandler'
import Channel from '../../User/models/channel'

const result = async (req: Request, res: Response)=>{
    const userAnswers = JSON.parse(JSON.stringify(answers)) as typeof answers //copying array:bcs we want original array be empty
    const userQuestions = JSON.parse(JSON.stringify(fetchedQuestions)) as typeof fetchedQuestions //copying array:bcs we want original array be empty
    console.log("iser amserrr",userAnswers)
    emptyAnswersArray()
    setQuizQuestions([])

    console.log("iser amserrr",userAnswers)
    await results(userAnswers, userQuestions) //complete calc result
    console.log("wrongCounter",wrongCounter)
    if (wrongCounter===0){
        console.log("channel from resultjs", channel)
        await User.findByIdAndUpdate(currentUser._id, { $push: {authorized: channel?._id} }) //push the channel id in authorized array 
        
        console.log("doneee true wrongcounter 0")
    }else {
        if (wrongCounter >0) {
            if (channel){
                await Channel.findOneAndUpdate({_id: channel._id}, {$inc: {expirePoints: -1}})
            }
        }
    }

    console.log(channel)
    const thisChannel = await Channel.findById(channel?._id)
    let expiryPoint:number = (thisChannel?.expirePoints)?thisChannel?.expirePoints:-1
    if (expiryPoint>=0){
        res.render('results', {
            results: userAnswers, 
            slideId: channel.slideId, 
            quizId: channel.quizId, 
            expire: expiryPoint, 
            wrongCounter: wrongCounter
        })
    } else if(expiryPoint==-1) {
        res.render(
            'message-to-user', 
            {
                message: "Limit Exceeded. Link Expired. You couldn't answer all questions.", 
                btnText: "Main Page", 
                btnHref: "/"
            }
        )
    } else {
        console.log("hi ia m the 404")
        res.redirect('/page404')
    }
}

export default result