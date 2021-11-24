import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import DevelotContext from "../Uilts/DevelotContext"

function Public(props) {
  const { publicInfo } = useContext(DevelotContext)
  const { info } = props
  console.log(publicInfo)
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <h2>What is an API?</h2>
        <p>
          API stands for “application programming interface.” APIs allow one application to “talk-to” another to allow
          for the transfer of stored data or instructions. API’s are everywhere in your daily life, from the embedded
          YouTube videos on social media applications to the smart speaker on your kitchen counter. They make it
          possible for software developed at different times by different people to interact and, thereby, increase
          functionality and productivity.
        </p>

        <h2>How does an API work?</h2>
<p>For the following example, we will be working in JavaScript  with The One API (Calendarific Global Holidays). Consult the API documentation for specific instructions on usage. Many APIs require an authenticating id token to access. The instructions for acquiring that token are also found within the API’s documentation.</p>
        {publicInfo.map(info => (
          <Col>
            <Card>
              <Card.Text> {info.name}</Card.Text>
              <Card.Body>
                <Card.Title>{info.description}</Card.Title>
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
        )
      </Row>
    </>
  )
}

export default Public
