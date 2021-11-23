import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DevelotContext from "../Uilts/DevelotContext";

function ModelItem(props) {
 
      const {show,handleClose,information}=props
    const{confirmInformation}=useContext(DevelotContext)
    return (  <>
       
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Enformation</Modal.Title>
          </Modal.Header>
          <Form className="mt-5 " onSubmit={e=>confirmInformation(e,information._id)}>
          <Form.Group className="mb-3">
            <Form.Label>Title:</Form.Label>
            
              <Form.Control type="text" name="title" defaultValue={information.title} required />
           
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
           
              <Form.Control type="url" name="image"  defaultValue={information.image} required />
            
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
           
              <Form.Control as="textarea" rows={3}  defaultValue={information.description} required name="description" />
            
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="sucess" type="submit" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
    
    </>  )
}

export default ModelItem;