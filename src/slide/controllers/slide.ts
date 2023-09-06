import { Request, Response } from "express";
import Slide from "../models/slide";

export default async function(req: Request, res: Response){

    const slide = await Slide.findOne({_id:  req.params.slideId})
    .populate({path: 'pages', populate: {path: 'images'}})

    res.render('slide', {slide: slide})
}