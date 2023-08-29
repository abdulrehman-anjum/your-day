import { Request, Response } from 'express'
import { currentUser } from '../../Auth/middlewares/refreshThisUser'
import Channel from '../models/channel'

export default async function (req: Request, res: Response){


    const channelList = await Channel.find({channel_creator: currentUser._id})

    res.render('channel-list', {channelList: channelList})
}