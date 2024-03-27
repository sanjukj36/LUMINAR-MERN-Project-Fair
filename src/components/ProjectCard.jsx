import React, { useState } from 'react'
import { Button, Card, CardBody, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='shadow mb-5 btn' style={{ width: "28rem" }}>
        <Card.Img height={'200px'} variant='top' src='data:image/jpeg;base64,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'/>

        <CardBody>
          <Card.Title>Project Title</Card.Title>
        </CardBody>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-flude' src="data:image/png;base64,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" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Project Title</h3>
              <h6><span className='fw-bolder'>Languages Used:</span>HTML, CSS, JS</h6>
              <p style={{ textAlign: "justify" }}><span className='fw-bolder'>Description:</span>t is a long established fact that ublishing packages and web page editors now use Lorem Ipsum as their default model text, </p>
            </div>
          </div>


          <div className="fload-start">
            <a href='/' target='_blank' className='btn btn-secondary' onClick={handleClose}>
              <i className='fa-brands fa-github '></i>
            </a>
            <a href='/' target='_blank' className='btn btn-secondary ms-2' onClick={handleClose}>
              <i className='fa-solid fa-link '></i>
            </a>
          </div>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>

    </>
  )
}

export default ProjectCard
