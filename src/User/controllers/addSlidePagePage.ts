import {Request, Response} from 'express'

const addSlidePage = async (req: Request, res: Response)=>{

    const slideId = req.params.slideId

    res.render('add-slide-page', {slideId: slideId})
   
}

export default addSlidePage

