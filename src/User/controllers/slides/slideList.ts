import {Request, Response} from 'express'
import { currentUser } from '../../../Auth/middlewares/refreshThisUser'
import Slide from '../../../slide/models/slide'

export default async function (req: Request, res: Response){

    const slideList = await Slide.find({slide_creator: currentUser._id})


    res.render('slide-list', {slideList: slideList})
}