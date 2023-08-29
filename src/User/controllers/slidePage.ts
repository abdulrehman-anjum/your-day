import { Request, Response } from "express";
import Slide from "../../slide/models/slide";
export default async function(req: Request, res: Response){
    //display questions and add question btn
    const slideId = req.params.slideId
    const slide = await Slide.findById(slideId)
    .populate("pages")
    console.log("slide-page. slide", slide)
    res.render('slide-page', {slide: slide})
}