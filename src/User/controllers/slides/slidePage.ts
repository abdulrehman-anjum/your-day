import { Request, Response } from "express";
import Slide from "../../../slide/models/slide";
export default async function(req: Request, res: Response){
    try{
        const slideId = req.params.slideId
        const slide = await Slide.findById(slideId).populate("pages")
        res.render('slide-page', {slide: slide})
    }catch(err){
        console.error(err)
        res.redirect('/page404')
    }
}