import React from 'react'
import Edit from './Edit'
import Add from './Add'
function View() {
  return (
    <>
      <div className='d-flex justify-content-between w-100'>
        <h1 className='text-warning'>All Projects</h1>
        <div><Add></Add></div>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-between border p-2 rounded">
          <h3>Project Title</h3>
          <div className="icon">
            <div className='btn'><Edit/></div>
            <a href="" target='_blank'><i className='fa-brands fa-github'></i></a>
            <button className='btn '><i className='fa-solid fa-trash text-danger'></i></button>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default View