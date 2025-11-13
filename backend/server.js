import dotenv from "dotenv"
import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import { router } from "./routes/taskRoutes.js"

dotenv.config()

const app = express()

app.use(cors())              // <<< MANDATORY for frontend to work
app.use(express.json())

// Your actual API route
app.use("/tasks", router)

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("MongoDB Database connected Successfully")
  } catch (error) {
    console.log("MongoDB Connection Failed", error.message)
    process.exit(1)
  }
}

app.listen(PORT, async () => {
  await connectDB()
  console.log(`Server is running on port : ${PORT}`)
})
