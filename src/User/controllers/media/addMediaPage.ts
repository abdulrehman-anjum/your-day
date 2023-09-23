import {Request, Response} from 'express'
import Page from '../../../slide/models/page'
import Slide from '../../../slide/models/slide'

const addMediaPage = async (req: Request, res: Response)=>{
    try {
        const slideId = req.params.slideId
        const slide = await Slide.findOne({_id: slideId}).populate('pages')


        const pageId = req.params.pageId

        const page = await Page.findOne({_id: pageId}).populate('image')
        const pageImage = page?.image
        console.log(pageImage)

        let image: any
        if (pageImage){
            image = pageImage
        } else {
                image = 
                    {
                        url: "/images/default-image.png"
                    }

            
        }




        res.render('add-media-slide-page', {pageId: pageId, image: image, slide: slide, })

    }catch(err){
        console.error(err)
        res.redirect('/page404')
    }
}

export default addMediaPage