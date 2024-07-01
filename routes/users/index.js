import express from 'express'
import postUser from "./post.js"
import getUsers from './get.js'
import deleteUser from './delete.js'
import updateUser from './update.js'
import loginUser from './login.js'

const router = express.Router()

router.post('/login', loginUser)
router.post('/', postUser)
router.get('/', getUsers)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router