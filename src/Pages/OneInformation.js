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
    <Container className="mt-5 mb-3 "style={{ marginTop: "100px"}} >
      <Row className="d-flex align-item-center justify-content-center">
        <Col md={2}>
          <h3>owner</h3>
        </Col>
        <Col md={3}>
          <Image src={information._user.photo} style={{ height: 200 }} />
        </Col>
        <Col md={4}>
          <h3>
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
              <Card.Title className="text-center">{information.title}</Card.Title>
            </Card.Header>
            <Card.Body stylle={{ height: 200 }}>
              <Card.Text className="text-center">{information.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default OneInformation
