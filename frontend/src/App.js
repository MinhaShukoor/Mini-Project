import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import User from '../src/MainRoutes/User';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<User/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;





