import { Request, Response } from "express";
import Channel from "../models/channel";
export default async function(req: Request, res: Response){
    const channelName = req.params.channelName
    console.log(channelName)

    const channel = await Channel.findOne({channelName: channelName})
    if (channel){
        await Channel.findOneAndUpdate({_id: channel._id}, {$inc: {expirePoints: -1}})
    }
    console.log(channel)

    let expiryPoint:number = (channel?.expirePoints)?channel?.expirePoints:0

    if (expiryPoint <= 0) {
        res.render('message-to-user', {message: "link expired", btnText: 'main-page', btnHref: "/"})
    } else {
        console.log('answer the quiz')
        res.redirect(`/quiz/start/${channel?.quizId}`)
    }

}