import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashBoard}) {
  return (
    <Navbar style={{zIndex:'1'}} className='Card shadow top-0 position-fixed w-100'>
      <Container>
        <Navbar.Brand>
          <Link style={{textDecoration:'none'}} ClassName='fw-bolder' to={"/"}><strong><i class="fa-brands fa-docker"></i> Project Fair</strong></Link>
        </Navbar.Brand>
        { insideDashBoard &&
          <div className='ms-auto'>
            <button className='btn btn-link'>Logout<i className='fa-solid fa-arrow-right'></i></button>
          </div>
        }
      </Container>
    </Navbar>
  )
}

export default Header
