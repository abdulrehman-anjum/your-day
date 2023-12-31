import { Request, Response } from "express";
import { setChannelCreation, setChannelName } from "../../middlewares/sameUsernameChecker";
import Channel from "../../models/channel";
import _ from 'lodash'
import { currentUser } from "../../../Auth/middlewares/refreshThisUser";

export default async function (req:Request, res:Response) {
    const newChannel = new Channel({
        channel_creator: currentUser._id,
        channelName: `${_.kebabCase(`${req.body.channelName} by ${currentUser.username}`)}`, quizId: req.body.quizId, slideId: req.body.slideId
    })

    await newChannel.save()

    setChannelCreation(false)
    setChannelName("")
    res.redirect('/u')
}