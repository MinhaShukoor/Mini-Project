import React from 'react'
import UserHomepage from './Pages/User/UserHome.js'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import User from './MainRoutes/User.js'
// import UserSignupPage from './Pages/User/UserSignupPage.js'

// import UserLoginPage from './Pages/User/UserLoginPage'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<User/>}/>
      </Routes>
      </BrowserRouter>
<UserHomepage/>
{/* <UserSignupPage/> */}
{/* <UserLoginPage /> */}

    </div>
  )
}

export default App

