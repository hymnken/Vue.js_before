import express from 'express'
import { getAlluser } from '../controller/user_ctrl'
const router = new express.Router()

router.get('/user', getAlluser)

export default router