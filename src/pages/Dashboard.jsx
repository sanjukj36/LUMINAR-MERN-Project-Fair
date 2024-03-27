import React from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <div>
      <Header insideDashBoard={true}/>
        <div style={{marginTop:"100px"}} className='container-fluid ms-1'>
          <h1>Welcome <span className='text-warning' >User</span>,</h1>
        
        <div className="row mt-3">
          <div className="col-lg-8">
            <View/>
          </div>
          <div className="col-lg-4">
            <Profile/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
