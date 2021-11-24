import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import DevelotContext from "../Uilts/DevelotContext"
import think from "../Images/think.png"

function AddInformation() {
  const { addInformation } = useContext(DevelotContext)
  return (
    <>
      <div className="ms-4 mt-4 ">
        <Form class="addInformation" onSubmit={addInformation} style={{ marginTop: "100px" }}>
          <h3 class="addh3"> Share your Knowledge About Programming..</h3>
          <img src={think} />
          <Form.Group className="mb-3">
            <Form.Label class="addlable">Title:</Form.Label>
            <Col md="6">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label class="addlable">Image:</Form.Label>
            <Col md="6">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label class="addlable">Description</Form.Label>
            <Col md="6">
              <Form.Control as="textarea" rows={3} required name="description" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-5">
            <Col md={{ span: 10, offset: 2 }}>
              <Button class="btn btn-info" type="submit">Add Information</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default AddInformation
