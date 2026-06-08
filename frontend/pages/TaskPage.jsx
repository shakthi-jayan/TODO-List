import dotenv from "dotenv"
import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import { router } from "./routes/taskRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/tasks", router)

const MONGO_URI = process.env.MONGO_URI

let isConnected = false

const connectDB = async () => {
  if (isConnected) return

  try {
    await mongoose.connect(MONGO_URI)
    isConnected = true
    console.log("MongoDB Connected")
  } catch (error) {
    console.error("MongoDB Connection Failed:", error)
    throw error
  }
}

app.use(async (req, res, next) => {
  await connectDB()
  next()
})

export default app
