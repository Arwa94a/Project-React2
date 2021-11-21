import { useContext } from "react";
import { Col, Form ,Row,Button} from "react-bootstrap";
import DevelotContext from "../Uilts/DevelotContext";

function AddInformation() {
  const {addInformation}=useContext(DevelotContext)
    return ( <>
    <div className="ms-4 mt-4 ">
        <Form className="mt-5 " onSubmit={addInformation}>
          <Form.Group className="mb-3">
            <Form.Label>Title:</Form.Label>
            <Col md="6">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Col md="6">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Col md="6">
              <Form.Control as="textarea" rows={3} required name="description" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-5">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">Add Information</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </> );
}

export default AddInformation;