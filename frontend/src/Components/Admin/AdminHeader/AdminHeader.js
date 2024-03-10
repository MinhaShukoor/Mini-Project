import React from 'react'
import './adminheader.css'

function AdminHeader() {
  return (
    <div className='adminheader'>

    <nav>
      <ul className='ADMINnav-list'>
        <>E-COMMERCE ADMIN</>
       
        <button className='Logout-button'>LOGOUT</button>

      </ul>
    </nav>
  </div>
  )
}

export default AdminHeader
