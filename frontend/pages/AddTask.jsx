import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API = "https://todo-list-vflu.onrender.com"

const AddTask = () => {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")
  const [priority, setPriority] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${API}/tasks/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          status,
          priority
        })
      })

      const data = await res.json()

      if (res.ok) {
        setMessage("Task added successfully!")
      } else {
        setMessage(data.error || "Something went wrong")
      }
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <>
      <div className="m-5" style={{ width: "300px" }}>
        <button
          className="btn btn-secondary mb-3"
          onClick={() => navigate("/home")}
        >
          Go Home
        </button>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control my-2"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="form-control my-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <select
            className="form-control my-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button className="btn btn-primary">Add Task</button>

          {message && <p style={{ marginTop: "10px" }}>{message}</p>}
        </form>
      </div>
    </>
  )
}

export default AddTask
