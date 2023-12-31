import express from 'express'
import slide from '../controllers/slide'

const router = express.Router()

router.get('/start/:slideId', slide)

export default router