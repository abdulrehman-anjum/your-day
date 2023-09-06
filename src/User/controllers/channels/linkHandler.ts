import { Request, Response } from "express";
import Channel from "../../models/channel";
import { currentUser } from "../../../Auth/middlewares/refreshThisUser";
export let channel: any

export function setChannelVal(val: boolean){
    channel = val
}

export default async function(req: Request, res: Response){
    const channelName = req.params.channelName

    channel = await Channel.findOne({channelName: channelName})
    if (channel){
        await Channel.findOneAndUpdate({_id: channel._id}, {$inc: {expirePoints: -1}})
    }

    let expiryPoint:number = (channel?.expirePoints)?channel?.expirePoints:0

    if (expiryPoint > 0 || currentUser.authorized.includes(channel._id)) {
        res.redirect(`/q/start/${channel?.quizId}`)
    } else {
        res.render('message-to-user', {
            message: "Sorry, This link has been expired. You can ask the sender to send you the link again.", 
            btnText: 'Go to homepage', btnHref: "/"
        })    
    }

}