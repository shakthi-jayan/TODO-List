import dotenv from "dotenv"
import mongoose from "mongoose"
import express from "express"
import { router } from "./routes/taskRoutes.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use('/api/backend/tasks/',router)
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
