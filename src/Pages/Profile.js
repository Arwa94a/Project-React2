import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import DevelotContext from "../Uilts/DevelotContext";

function Profile() {
const {profile}=useContext(DevelotContext)

if(!profile){
    return <h1>Loading...</h1>
}
    return (<>
    <Container>
        <Card>
        <Row>
            <Col> <img src={profile.image}/></Col>
        </Row>
        <Row>
            <Col><h3>{profile.firstName}</h3> <h3>{profile.lastName}</h3></Col>
        </Row>
        <Row>
            <Col><h5>{profile.email}</h5></Col>
        </Row>
        </Card>
    </Container>
    
    </>  );
}

export default Profile;