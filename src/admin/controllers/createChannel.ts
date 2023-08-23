import { Request, Response } from "express";
import { setChannelCreation } from "../middlewares/sameUsernameChecker";
import Channel from "../models/channel";
import _ from 'lodash'


export default async function (req:Request, res:Response) {
    console.log(req.body, "=>", _.kebabCase(req.body.channelName))
    const newChannel = new Channel({
        channelName: _.kebabCase(req.body.channelName), quizId: req.body.quizId
    })

    await newChannel.save()

    setChannelCreation(false)
    res.redirect('/admin')
}