import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import ProgrammingNav from "./components/ProgrammingNav"
import CodeJs from "./Pages/CodeJs"

import Home from "./Pages/Home"
import Learn from "./Pages/Learn"
import Vision from "./Pages/Vision"


function App() {


  return (
    <>
    <ProgrammingNav />
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="vision" element={<Vision />}/>
<Route path="Learn" element={<Learn />}/>


  
    </Routes>
    < Footer/>
    
    
    </>
  )
}
export default App
