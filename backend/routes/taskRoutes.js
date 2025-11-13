import { Router } from 'express'
import { addTask, getTasks, removeTask, updateTaskStatus } from '../controllers/taskController.js'

export const router = Router()

router.get('',getTasks)
router.post('/add',addTask)
router.delete('/delete/:id',removeTask)
router.patch("/update/:id", updateTaskStatus)
