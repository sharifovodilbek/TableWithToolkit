import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserList from "./pages/UserList"
import SelectedUsers from "./pages/SelectedUsers"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/selected" element={<SelectedUsers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
