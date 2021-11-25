import { Route, Routes, useNavigate } from "react-router-dom"
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
import AddInformation from "./Pages/AddInformation"
import Profile from "./Pages/Profile"

import OneInformation from "./Pages/OneInformation"
import Public from "./Pages/Public"

function App() {
  const [informations, setInformations] = useState([])
const [publicInfo,setPublic]=useState([])
  const [profile, setProfile] = useState(null)
  const [errorSignup, setErrorSignup] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)
  const navigate = useNavigate()
  /*******************************Api bublic********************************************* */
  const getPublic = async () => {
    try {
      const response = await axios.get("https://calendarific.com/api/v2/holidays?&api_key=f970bcbc58113e3e1f9349f445553320bd56b0ff&country=sa&year=2022")
      setPublic(response.data.response.holidays)
       console.log(response.data.response.holidays)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  /**********************************API ************************************* */
  const getInformations = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/programming-440/items")
      setInformations(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  /*********************post*************************************** */
  const addInformation = async e => {
    e.preventDefault()
    const form = e.target
    try {
      const addBody = {
        title: form.elements.title.value,
        image: form.elements.image.value,
        description: form.elements.description.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/programming-440/items", addBody, {
        headers: {
          Authorization: localStorage.tokenJs,
        },
      })
      getInformations()
      navigate("/information")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  /*********************************put********************************* */
  const confirmInformation = async (e, id) => {
    e.preventDefault()

    try {
      const form = e.target
      const confirmBody = {
        title: form.elements.title.value,
        image: form.elements.image.value,
        description: form.elements.description.value,
      }
      await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/testProject/items/${id}`, confirmBody, {
        headers: {
          Authorization: localStorage.tokenJs,
        },
      })
      getInformations()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  /*******************************delete********************************* */
  const deletInformation = async e => {
    const informationId = e.target.id
    e.preventDefault()
    try {
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/testProject/items/${informationId}`, {
        headers: {
          Authorization: localStorage.tokenJs,
        },
      })
      getInformations()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    console.log("useEffect", useEffect)
    getInformations()
    getPublic()

    if (localStorage.tokenJs) {
      getProfile()
    }
  }, [])
  /********************************profle************************* */
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenJs,
        },
      })
      setProfile(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  /********************************signup**************************************** */
  const signUp = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const informationBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", informationBody)
      navigate("/login")
      
    } catch (error) {
      console.log(error.response.data)
      setErrorSignup(error.response.data)
    }
  }

  /****************************login*************************** */
  const login = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const informationBody = {
        password: form.elements.password.value,
        email: form.elements.email.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", informationBody)
      const tokenJs = response.data
      localStorage.tokenJs = tokenJs
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
      setErrorLogin(error.response.data)
    }
  }
  /*****************************logout*************************************** */
  const logout = () => {
    localStorage.removeItem("tokenJs")
    
  }

  const store = {
    informations: informations,
    signUp: signUp,
    login: login,
    logout: logout,
    addInformation: addInformation,
    deletInformation: deletInformation,
    profile: profile,
    confirmInformation: confirmInformation,
    publicInfo:publicInfo,
    errorSignup:errorSignup,
    errorLogin:errorLogin,
  }
  return (
    <>
      <DevelotContext.Provider value={store}>
        <ProgrammingNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vision" element={<Vision />} />
          <Route path="Learn" element={<Learn />} />
          <Route path="/html" element={<Html />} />
          <Route path="/vidhtml" element={<VidHtml />} />
          <Route path="/codehtml" element={<CodeHtml />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/codejs" element={<CodeJs />} />
          <Route path="/css" element={<Css />} />
          <Route path="/codecss" element={<CodeCss />} />
          <Route path="/vidcss" element={<VidCss />} />
          <Route path="/vidjs" element={<VidJs />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/PlatForms" element={<PlatForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/information" element={<Information />} />
          <Route path="/add-information" element={<AddInformation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/api" element={<Public />} />

          <Route path="information/:informationId" element={<OneInformation />} />
        </Routes>

        <Footer />
      </DevelotContext.Provider>
    </>
  )
}
export default App
