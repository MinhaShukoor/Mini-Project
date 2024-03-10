import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import User from '../src/MainRoutes/User';
// import Admin from '../src/MainRoutes/Admin'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<User/>}/>
      {/* <Route path='/admin/*' element={<Admin/>}/> */}

 </Routes>
    </BrowserRouter>
  );
}

export default App;





