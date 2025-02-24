import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { PostProvider } from "./components/PostProvider"
function App() {

  return (
    <PostProvider>
      <div className='w-full h-screen flex flex-col items-center justify-center shadow-lg shadow-gray-800' style={{
        backgroundColor: "var(--background-color)",
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PostProvider>
  )
}

export default App
