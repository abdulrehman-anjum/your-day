import {Request, Response} from 'express'
import Slide from '../../slide/models/slide'
import { currentUser } from '../../Auth/middlewares/refreshThisUser'
let counter: number = 1

export default async function (req: Request, res: Response){
    const slide = {
        slide_name: req.body.slideName===''?`Slide - ${counter++}`:req.body.slideName,
        slide_creator: currentUser._id,
        pages: []
    }

    console.log("etyid", slide, Date.now())

    const newSlide = new Slide(slide)
    await newSlide.save()
    res.redirect('/u/slide-list')
}