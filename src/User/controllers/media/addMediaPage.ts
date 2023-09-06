import {Request, Response} from 'express'
import Page from '../../../slide/models/page'

const addMediaPage = async (req: Request, res: Response)=>{

    const pageId = req.params.pageId

    const page = await Page.findOne({_id: pageId}).populate('images')

    const images = page?.images


    res.render('add-media-slide-page', {pageId: pageId, images: images})
   
}

export default addMediaPage