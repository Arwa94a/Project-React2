import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import DevelotContext from "../Uilts/DevelotContext"

function Public() {
  const {weathers}=useContext(DevelotContext)
  const description =weathers.weather[0].description
  const temp=Math.round(weathers.main.temp)
  const name=weathers.name
  const icon=weathers.weather[0].icon
  const main=weathers.weather[0].main
  
  const tempMax=Math.round(weathers.main.temp_max)
  const tempMin=Math.round(weathers.main.temp_min)
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        
          <Col>
            <Card>
              <Card.Text> {description}</Card.Text >
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{temp}</Card.Text>
                <Card.Text>{icon}</Card.Text>
                <Card.Text>{main}</Card.Text>
                <Card.Text>{tempMax}</Card.Text>
                <Card.Text>{tempMin}</Card.Text>

                
              </Card.Body>
            </Card>
          </Col>
        )
      </Row>
    </>
  )
}

export default Public
