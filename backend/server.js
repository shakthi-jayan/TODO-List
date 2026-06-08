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

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI)

    console.log("MongoDB Connected Successfully")

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("MongoDB Connection Failed:", error)
  }
}

startServer()

export default app
