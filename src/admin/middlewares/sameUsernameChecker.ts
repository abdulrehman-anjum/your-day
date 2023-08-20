// model name, property name, input
import { NextFunction, Response, Request } from "express"
import findExisting from "../services/findExisting"
export let channelCreation: boolean = false 
export async function setChannelCreation(val: boolean){
    channelCreation = val
}
export let channelName: string = ''

export default async function(req: Request, res: Response, next: NextFunction){
    channelName = req.body.channelName
    const found = await findExisting('Channel', 'channelName', channelName)
    if (!found) {
        await setChannelCreation(true)
    }
    res.redirect('/admin/createChannel')
}

