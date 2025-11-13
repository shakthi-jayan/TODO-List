import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskPage from "../pages/TaskPage"
import AddTask from "../pages/AddTask"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<TaskPage />} />
        <Route path="/home" element={<TaskPage />} />
        <Route path="/addTask" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
