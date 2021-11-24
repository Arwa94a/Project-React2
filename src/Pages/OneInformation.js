import { useContext } from "react"
import { useParams } from "react-router"
import DevelotContext from "../Uilts/DevelotContext"
import { Card, Col, Container, Image, Row } from "react-bootstrap"
function OneInformation() {
  const { informationId } = useParams()
  const { informations } = useContext(DevelotContext)
  const information = informations.find(i => i._id === informationId)
  console.log(informations)
  if (!information) {
    return null
  }
  return (
    <Container style={{ marginTop: "150px"}} >
      <Row className="d-flex align-item-center justify-content-center g-2"  style={{ margin: "100px" }}>
        <Col md={2}>
          <h3 style={{ color:"#f667" ,textAlign:"center"}}>OWNER</h3>
        </Col>
        <Col md={3}>
          <Image src={information._user.photo} style={{ height: 200 ,borderRadius:"40px",marginLeft:"60px"}} />
        </Col>
        <Col md={4}>
          <h3  style={{ color:"green" ,textAlign:"center"}}>
            {information._user.firstName}
            {information._user.lastName}
          </h3>
        </Col>
      </Row>
      <Row className="d-flex align-item-center justify-content-center ">
        <Col>
          <Image src={information.image} style={{ height: 200 }} />
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title className="text-center" style={{ color:"#ff6879" ,textAlign:"center"}}>{information.title}</Card.Title>
            </Card.Header>
            <Card.Body stylle={{ height: 200 }}>
              <Card.Text className="text-center" style={{ textAlign:"center"}}>{information.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default OneInformation
