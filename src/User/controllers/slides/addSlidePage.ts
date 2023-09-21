import {Request, Response} from 'express'
import { currentUser } from '../../../Auth/middlewares/refreshThisUser'
import Page from '../../../slide/models/page'
import Slide from '../../../slide/models/slide'



const addSlidePage = async (req: Request, res: Response) => {
   try{
      const pageName = req.body.pageName

      const page = {
      page_name: pageName,
      page_creator: currentUser._id,
      images: []
      }

      console.log(page)

      const newPage = new Page(page)
      const p = await newPage.save()

      const pageId = p._id
      await Slide.updateOne({_id: req.params.slideId}, { $push: {pages: pageId} })

      res.redirect(`/u/slide/${req.params.slideId}`)
   }catch(err){
      console.error(err)
      res.redirect('/page404')
  }
}

export default addSlidePage