import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import uploadImg from "../assets/profileUploading.png"


function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h3 className='text-warning'>User Profile</h3>
        <button className='btn me-4'><i className="fa-solid fa-chevron-down" onClick={() => setOpen(!open)}></i></button>

      </div>
      <Collapse in={open}>
        <div className='row justify-content-center mt-2 me-3 shadow' id="example-collapse-text">
          <label className='text-center mb-3 '>
            <input type="file" name="" style={{ display: 'none' }} id="" />
            <img height={'200px'} className='img-fluid rounded' src={uploadImg} alt='' />
          </label>
          <div>
            <div className='mb-2 ' >
              <input type="text" className='form-control text-center' placeholder='GitHub URL' />
            </div>
            <div className='mb-2'>
              <input type="text" className='form-control text-center' placeholder='LinkedIn URL' />
            </div>
            <div className="d-grid">
              <button className="btn btn-warning">Update Profile</button>
            </div>


          </div>

        </div>
      </Collapse>
    </>
  )
}

export default Profile