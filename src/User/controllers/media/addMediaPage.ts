import {Request, Response} from 'express'
import Page from '../../../slide/models/page'
import Slide from '../../../slide/models/slide'

const addMediaPage = async (req: Request, res: Response)=>{

    const slideId = req.params.slideId
    const slide = await Slide.findOne({_id: slideId}).populate('pages')


    const pageId = req.params.pageId

    const page = await Page.findOne({_id: pageId}).populate('images')
    const pageImages = page?.images
    console.log(pageImages)

    
    let images: any
    if (pageImages?.length!=undefined?pageImages?.length>1:false){
        images = pageImages
    } else {
        if(pageImages?.length!=undefined?pageImages?.length>0:false){
            const url: any = pageImages && pageImages[0] !== undefined ? pageImages[0] : ""
            images = [
                {
                    id: url._id,
                    url: url.url
                },
                {
                    url: "/images/default-image.png"
                }
            ]    
        } else if(pageImages?.length!=undefined?pageImages?.length == 0:false) {
            images = [
                {
                    url: "/images/default-image.png"
                },
                {
                    url: "/images/default-image.png"
                }
            ]    
        }
        
    }




    res.render('add-media-slide-page', {pageId: pageId, images: images, slide: slide, })
   
}

export default addMediaPage