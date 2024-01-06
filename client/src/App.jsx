import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Dashboard from "./components/dashboard/Dashboard"
import { Toaster } from "@/components/ui/toaster"

const App = () => {

  

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    <Toaster />
    </>

  )
}

export default App