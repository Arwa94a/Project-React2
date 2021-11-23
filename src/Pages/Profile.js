import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import CardInformation from "../components/CardInformation"
import DevelotContext from "../Uilts/DevelotContext"

function Profile() {
  const { profile, informations } = useContext(DevelotContext)

  if (!profile) {
    return <h1>Loading...</h1>
  }
  const myInformations = informations.filter(item => item._user._id === profile._id)
  console.log(myInformations)

  return (
    <>
      <Container>
        <Card>
          <Row>
            <Col>
              {" "}
              <img src={profile.photo} height="200" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>{profile.firstName}</h3> <h3>{profile.lastName}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>{profile.email}</h5>
            </Col>
          </Row>
        </Card>
        <Row md={4} sm={2} xs={1}>
          {myInformations.map(information => (
            <CardInformation information={information} inProfile={true} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Profile
