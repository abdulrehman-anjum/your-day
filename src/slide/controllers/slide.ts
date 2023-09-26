import { Request, Response } from "express";
import Slide from "../models/slide";
import { currentUser } from "../../Auth/middlewares/refreshThisUser";
import Channel from "../../User/models/channel";

export default async function(req: Request, res: Response){
    try{
        let identified = false
        const channels = await Channel.find({slideId : req.params.slideId}).lean()


        channels?.forEach(async channel=>{
            if (currentUser?.authorized.includes(channel._id)){
                identified = true
            }
        })
        if (identified){
            const slide = await Slide.findOne({_id:  req.params.slideId}).populate("slide_creator")
            .populate({path: 'pages', populate: {path: 'image'}})
            res.render('slide', {slide: slide, currentUser: currentUser})
        } else {
            console.log("it was me all along...slide.ts muuhahahahahaaa")
            res.redirect('/page404')
        }
        
    }catch(err){
        console.error(err)
        res.redirect('/page404')
    }
}