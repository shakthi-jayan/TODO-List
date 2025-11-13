import { Task } from "../models/taskModels.js"

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 })
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const addTask = async (req, res) => {
  const { title, status, priority } = req.body

  try {
    const task = await Task.create({ title, status, priority })
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateTaskStatus = async (req, res) => {
  const { id } = req.params
  const { status } = req.body

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" })
    }

    res.status(200).json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const removeTask = async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await Task.findByIdAndDelete(id)
    if (!deleted) return res.status(404).json({ error: "Task not found" })

    res.status(200).json({ message: "Deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
