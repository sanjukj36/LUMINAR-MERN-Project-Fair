import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ insideRegister }) {
  const [userInputs,setUserInputs]=useState({
    userName:"",email:"",password:""
  })
  console.log(userInputs);
  const handleRegister=(e)=>{
    e.preventDefault()
    if(userInputs.userName && userInputs.email && userInputs.password){

    }else{
      toast.info("Please fill the form completely!!!")
    }

  }

  return (
    <div style={{ width: "100%", height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder'><i className='fa-solid fa-arrow-left'></i> Back To Home</Link>
        <div className="card shadow p-5 mt-2">
          <div className="row align-item-center">
            <div className="col-lg-6">
              <img className='w-100' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-4525.jpg" alt="Auth" />
            </div>
            <div className="col-lg-6">
              <h1 className='d-flex'><strong><i class="fa-brands fa-docker"></i> Project Fair</strong></h1>
              <h5 className="fw-bolder mt-2">Sign {insideRegister ? 'up' : 'in'} to Your Account</h5>
              <Form>
                {insideRegister ?
                  <div>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Username"
                      className="mb-3"
                    >
                      <Form.Control type="text" value={userInputs.userName} onChange={e=>setUserInputs({...userInputs,userName:e.target.value})} placeholder="username" />
                    </FloatingLabel>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control type="email" value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})} placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">

                      <Form.Control type="password" value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})} placeholder="Password" />
                    </FloatingLabel>
                  </div> :
                  <div>

                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control type="email" value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})} placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                      <Form.Control type="password" value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})} placeholder="Password" />
                    </FloatingLabel>

                  </div>}




                {
                  insideRegister ?
                    <div className='mt-3'>
                      <button onClick={handleRegister} className='btn btn-primary mb-2'> Register</button>
                      <p>Already have an Account? Click here to <Link className='text-info' to={"/login"}>Login</Link> </p>
                    </div>
                    :
                    <div className='mt-3'>
                      <button className='btn btn-primary mb-2'>Login</button>
                      <p>New User? Click here to <Link className='text-info' to={"/register"}>Register</Link> </p>
                    </div>

                }

              </Form>

            </div>

          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </div>
  )
}

export default Auth
