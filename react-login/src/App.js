import Login from "./component/Login"
import Register from "./component/Register"
import Home from "./component/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
  )
}

export default App;
