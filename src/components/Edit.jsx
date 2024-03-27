import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadImg from "../assets/upload-img.webp"


function Edit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className='btn' onClick={handleShow}><i className="fa-regular fa-pen-to-square"></i></button>


      <Modal size="lg" centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label>
                <input type="file" name="" style={{display:'none'}} id="" />
                <img height={'200px'} className='img-fluid' src={uploadImg} alt=''/>
              </label> 
            </div>
            <div className="col-lg-8">
              <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Language Used in the Project' />
              </div>
              <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Project GitHub Link' />
              </div>
              <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Project WebSite Link' />
              </div>
             
            </div>
            <div className='mb-2'>
                <input type="text" className='form-control' placeholder='Project Overview' />
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit