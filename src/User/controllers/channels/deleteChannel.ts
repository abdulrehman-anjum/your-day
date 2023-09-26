import { Request, Response } from "express";
import Channel from "../../../User/models/channel";
import User from "../../../Auth/models/user";
import { currentUser } from "../../../Auth/middlewares/refreshThisUser";


export default async function (req:Request, res:Response) {

    const id = req.params.id
    const channel = await Channel.findById(id)

    await User.findOneAndUpdate({_id:currentUser._id}, {$pull: {authorized: channel?._id}})
    await Channel.findByIdAndDelete(id)

    res.redirect('/u/channel-list')
}