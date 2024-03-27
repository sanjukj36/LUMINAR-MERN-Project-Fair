import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import LandingImg from '../assets/admin.gif'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col>
            <div className="w-100 d-flex justify-content-center aline-item-center">
              <div className="container">
                <h1 style={{ fontSize: "80px" }}><i class="fa-brands fa-docker"></i> Project Fair</h1>

                <p style={{ textAlign: "justify" }}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                <Link className='btn btn-warning mt-1'>Start To Explore <i class="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </Col>
          <Col>
            <img width={'70%'} className="ms-5 mb-5" src={LandingImg} alt="" />
          </Col>

        </Row>

      </Container>

      <div className="text-center mt-5 mb-5">
        <h1 className="mt-5 mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            <div className="me-5">
              <ProjectCard />
            </div>
          </div>
        </marquee>
         <button className='btn btn-link mt-3' >Click Here To view Project....</button>
      </div>

      <div className="d-flex text-center  mb-5 mt-5 flex-column">

        <h1> Our Testimonials</h1>
        <div className='d-flex justify-content-between align-items-center ms-5'>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-ite-center flex-column">
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt=''/>
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex">
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                </div>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column">
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt=''/>
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-regular fa-star '></i>
                  <i className='fa-regular fa-star '></i>
                </div>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column">
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt=''/>
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex">
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                </div>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </div>



    </>
  )
}

export default Home
