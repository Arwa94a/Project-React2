import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import ProgrammingNav from "./components/ProgrammingNav"
import CodeJs from "./Pages/CodeJs"
import Html from "./Pages/Html"
import JavaScript from "./Pages/JavaScript"
import VidHtml from "./Pages/VidHtml"
import VidJs from "./Pages/VidJs"
import DevelotContext from "./Uilts/DevelotContext"
import Home from "./Pages/Home"
import Learn from "./Pages/Learn"
import PlatForm from "./Pages/PlatForms"
import SignUp from "./Pages/SignUp"

import Vision from "./Pages/Vision"
import CodeHtml from "./Pages/CodeHtml"
import { useEffect, useState } from "react"
import axios from "axios"


import Information from "./Pages/Information"
import Login from "./Pages/Login"



import Css from "./Pages/Css"
import CodeCss from "./Pages/CodeCss"
 import VidCss from "./Pages/VidCss"

function App() {
  const [informations,setInformations]=useState([])
  const getInformations=async() =>{
    try{ 
      
      const response= await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/programming-440/items")
      setInformations(response.data)
     // console.log(response.data)
    }catch(error){
      console.log(error.response.data)

    }
        
        
  }
  useEffect(()=>{
    console.log("useEffect",useEffect)
    getInformations()
  },[])
const store={
  informations:informations,

}
  return (
    <>
     <DevelotContext.Provider value={store}>
  
    <ProgrammingNav />
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="vision" element={<Vision />}/>
<Route path="Learn" element={<Learn />}/>
<Route path="/html" element={<Html />} />
        <Route path="/vidhtml" element={<VidHtml />} />
        <Route path="/codehtml" element={<CodeHtml />} />
        <Route path="/javascript" element={<JavaScript/>}/>
        <Route path="/codejs" element={<CodeJs/>}/>
        <Route path="/css" element={<Css/>}/>
        <Route path="/codecss"element={< CodeCss/>}/>
        <Route path="/vidcss"element={< VidCss/>}/>
        
        <Route path="/vidjs"element={<VidJs/>}/>
<Route path="/vision" element={<Vision />}/>
<Route path="/Learn" element={<Learn />}/>
<Route path="/PlatForms" element={<PlatForm />}/>
<Route path="/signup" element={<SignUp />}/>
<Route path="/login" element={<Login />}/>
<Route path="/information" element={<Information />}/>


  
    </Routes>
    < Footer/>
    </DevelotContext.Provider>
    
    </>
  )
}
export default App
