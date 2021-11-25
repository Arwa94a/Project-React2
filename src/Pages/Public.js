import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import DevelotContext from "../Uilts/DevelotContext"
import component from"../Images/component.png"
function Public(props) {
  const { publicInfo } = useContext(DevelotContext)
  const { info } = props
  console.log(publicInfo)
  return (
    <>
    <div className="public">
        <h2 className="publicH">What is an API?</h2>
        <p>
          API stands for “application programming interface.” APIs allow one application to “talk-to” another to allow
          for the transfer of stored data or instructions. API’s are everywhere in your daily life, from the embedded
          YouTube videos on social media applications to the smart speaker on your kitchen counter. They make it
          possible for software developed at different times by different people to interact and, thereby, increase
          functionality and productivity.
        </p>

        <h2 className="publicH">How does an API work?</h2>
<p>For the following example, we will be working in JavaScript  with The One API (Calendarific Global Holidays). Consult the API documentation for specific instructions on usage. Many APIs require an authenticating id token to access. The instructions for acquiring that token are also found within the API’s documentation.</p>

<h3 className="publicH">Read API Documentation</h3>
<p>From This Websit To Creat With Us API Calendarific Global Holidays</p>
<a className="publica">https://calendarific.com/api-documentation</a>
<p>So  All requests to our API are supposed to be sent to this endpoint. Below you will find a list of endpoints that the API supportsAll requests to our API are supposed to be sent to this endpoint. Below you will find a list of endpoints that the API supportsAll requests to our API are supposed to be sent to this endpoint. Below you will find a list of endpoints that the API supports</p>
<a className="publica">API Url=https://calendarific.com/api/v2</a>
<h4 className="publicH">Example</h4>
<p> {"const getPublic = async () => {"}
  {"  try {"}
     {" const response"} = await axios.get("API Url")
     {" setPublic(response.data.response.holidays)"}
     {"  console.log(response.data.response.holidays)"}
   {" } catch (error) {"}
    {"  console.log(error.response.data)"}
   {" } }"}
   
   ,<h4 className="publicH">And put function getPublic() in useEffect and Creat useState Like const =[public,setPublic]=useState([])</h4>
   </p>
   <p>Afer that Put Card In components Like this</p>
   <img src={component}/>
   <h1 className="publicH">After This it's Will be show like this</h1>
   </div>
      <Row xs={1} md={1} className="g-4">
    

        {publicInfo.map(info => (
          <Col>
            <Card className="publicCard" >
            <Card.Title className="publicName">{info.name}</Card.Title>
             
              <Card.Body>
              <Card.Text> {info.description}</Card.Text>
                <Card.Title>
                  {info.date.datetime.year}
                  {"/"}
                  {info.date.datetime.month}
                  {"/"}
                  {info.date.datetime.day}
                </Card.Title>
                <Card.Title>
                  {info.date.datetime.hour}
                  {":"}
                  {info.date.datetime.minute}
                  {":"}
                  {info.date.datetime.second}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
        
      </Row>
    </>
  )
}

export default Public
