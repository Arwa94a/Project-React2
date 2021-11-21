import { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import DevelotContext from "../Uilts/DevelotContext"
function CardInformation(props) {
    const {information}=props
   
    
    return ( <>

  
  <Col>
  <Card>
    <Card.Img variant="top" src={information.image} />
    <Card.Body>
      <Card.Title>{information.title}</Card.Title>
      <Card.Text>
       {information.description}
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
      ))
 
  
  )

    </> );
}

export default CardInformation;