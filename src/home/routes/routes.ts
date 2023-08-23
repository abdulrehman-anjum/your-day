import express from 'express'
import home from '../controllers/home'
import linkHandler from '../../admin/controllers/linkHandler'

const router = express.Router()


router.get('/', home)
router.get('/link/:channelName', linkHandler) //change the word link to smthng else like present or something


export default router