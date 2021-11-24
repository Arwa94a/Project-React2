import { useContext, useState } from "react"
import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import DevelotContext from "../Uilts/DevelotContext"
import ModelItem from "./Model"

function CardInformation(props) {
  const { information, inProfile } = props
  const { deletInformation } = useContext(DevelotContext)
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }
  const handleOpen = () => {
    setShow(true)
  }
  return (
    <>
 
      <Col style={{ marginTop: "100px"}} >
        <Card >
          <Card.Img variant="top" src={information.image} style={{height:"200px"}}  />
          <Card.Body  style={{ background: "rgb(165, 157, 157,.6)"}} >
            <Card.Title style={{ color: "rgb(60, 106, 114)"}} >{information.title}</Card.Title>
            <Card.Text>{information.description}</Card.Text>
            {inProfile ? (
              <>
                <Button variant="danger" className="me-2"onClick={deletInformation} id={information._id}>
                  Delete
                </Button>
                <Button variant="success"  onClick={handleOpen}>
                  edit
                </Button>
              </>
            ) : (
              <Link className="btn" to={`/information/${information._id}`}><a class="view"> View</a>
              
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
      <ModelItem handleClose={handleClose}  information={information} show={show} />
    </>
  )
}

export default CardInformation
