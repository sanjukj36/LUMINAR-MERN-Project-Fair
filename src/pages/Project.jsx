import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'

function Project() {
  return (
    <>
      <Header/>
      <div style={{marginTop:"150px"}} className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1>ALL Project</h1>
          <input className="form-control w-25" placeholder='Search Project by Language used'></input>
        </div>
        <Row className="mt-5">
          <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
          
        </Row>
      </div>
    </>
  )
}

export default Project
