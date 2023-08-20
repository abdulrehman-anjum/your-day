import { Request, Response } from "express";
import { setChannelCreation } from "../middlewares/sameUsernameChecker";
import Channel from "../models/channel";

export default async function (req:Request, res:Response) {
    console.log(req.body)
    const newChannel = new Channel({
        channelName: req.body.channelName, quizId: req.body.quizId
    })

    await newChannel.save()

    setChannelCreation(false)
    res.redirect('/admin')
}