import { useContext } from "react"
import DevelotContext from "../Uilts/DevelotContext"

function InformationEdit(props) {
  const { confirmInformation } = useContext(DevelotContext)
  const { information } = props
  return (
    <>
      <div className="ms-4 mt-4 ">
        <Form className="mt-5 " onSubmit={confirmInformation}>
          <Form.Group className="mb-3">
            <Form.Label>Title:</Form.Label>
            <Col md="6">
              <Form.Control type="text" name="title" defaultValue={information.title} required />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Col md="6">
              <Form.Control type="url" name="image" defaultValue={information.image} required />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Col md="6">
              <Form.Control as="textarea" rows={3} defaultValue={information.description} required name="description" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-5">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">Confirm Information</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default InformationEdit
