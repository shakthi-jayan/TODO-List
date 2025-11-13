import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const TaskPage = () => {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()
  const API = "https://todo-list-vflu.onrender.com"

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(`${API}/tasks`)
      const data = await res.json()
      setTasks(data)
    }
    fetchTasks()
  }, [])

  const handleDelete = async (id) => {
    await fetch(`${API}/tasks/delete/${id}`, {
      method: "DELETE",
    })

    setTasks((prev) => prev.filter((task) => task._id !== id))
  }

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "completed" ? "pending" : "completed"

    const res = await fetch(`${API}/tasks/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })

    if (res.ok) {
      setTasks((prev) =>
        prev.map((task) =>
          task._id === id ? { ...task, status: newStatus } : task
        )
      )
    }
  }

  return (
    <>
      <button className="btn btn-primary m-5" onClick={() => navigate("/addTask")}>
        Add Task
      </button>

      {tasks.map((task) => (
        <div key={task._id} className="card m-3" style={{ width: "18rem", margin: "1rem" }}>
          <div className="card-body">
            <h5 className="card-title">Title: {task.title}</h5>

            {}
            <div className="form-check form-switch my-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={task.status === "completed"}
                onChange={() => toggleStatus(task._id, task.status)}
              />
              <label className="form-check-label">
                {task.status === "completed" ? "Completed" : "Pending"}
              </label>
            </div>

            <p className="card-text">Priority: {task.priority}</p>

            <button className="btn btn-danger" onClick={() => handleDelete(task._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default TaskPage
