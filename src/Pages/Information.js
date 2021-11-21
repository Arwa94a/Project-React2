import CardInformation from "../components/CardInformation";
import { useContext } from "react";
import {  Container, Row } from "react-bootstrap";
import DevelotContext from "../Uilts/DevelotContext"

function Information() {
    const {informations}=useContext(DevelotContext)  
    return (<>
       <Container><Row xs={1} sm={2} md={4} className="g-4">
   
       {informations.map(information=>(

       <CardInformation information={information}/>
       ))}
    
   </Row> </Container>);
    
    </>)
}

export default Information;