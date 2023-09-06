// model name, property name, input
import { NextFunction, Response, Request } from "express"
import findExisting from "../services/findExisting"
import _ from "lodash"
import { currentUser } from "../../Auth/middlewares/refreshThisUser"
export let channelCreation: boolean = false 
export let channelName: string = ''

export async function setChannelCreation(val: boolean){
    channelCreation = val
}
export async function setChannelName(val: string){
    channelName = val
}

export default async function(req: Request, res: Response, next: NextFunction){
    channelName = req.body.channelName
    const found = await findExisting('Channel', 'channelName', _.kebabCase(`${channelName} by ${currentUser.username}`))
    if (!found) {
        await setChannelCreation(true)
    }
    res.redirect('/u/createChannel')
}

