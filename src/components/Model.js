import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DevelotContext from "../Uilts/DevelotContext";

function ModelItem(props) {
 
      const {show,handleClose,information}=props
    const{confirmInformation}=useContext(DevelotContext)
    return (  <>
       
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{background:"#1c78a0",display:"inline-block"}}>Edit Information:</Modal.Title>
          </Modal.Header>
          <Form className="mt-5 " onSubmit={e=>confirmInformation(e,information._id)}>
            
          <Form.Group className="mb-3">
            <Form.Label style={{fontSize:"30px", color:"#46C1F6",marginLeft:"30px" }}>Title:</Form.Label>
            
              <Form.Control style={{width:"450px",marginLeft:"20px"}} type="text" name="title" defaultValue={information.title} required />
           
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{fontSize:"30px", color:"#46C1F6",marginLeft:"30px" }}>Image:</Form.Label>
           
              <Form.Control style={{width:"450px",marginLeft:"20px"}} type="url" name="image"  defaultValue={information.image} required />
            
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{fontSize:"30px", color:"#46C1F6",marginLeft:"30px" }}>Description</Form.Label>
           
              <Form.Control style={{width:"450px",marginLeft:"20px"}} as="textarea" rows={3}  defaultValue={information.description} required name="description" />
            
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button class="btn btn-success" type="submit" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
    
    </>  )
}

export default ModelItem;