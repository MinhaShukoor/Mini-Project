import './App.css';
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import UserRoutes from './UserRoutes'; 
// import AdminRoutes from './AdminRoutes'; 
import UserHomepage from './Pages/User/UserHomepage';

function App() {
  return (
    <div>
   
    {/* <Routes>
      <Route path='/*' element={<UserRoutes/>}/>
      <Route path='/admin/*' element={<AdminRoutes/>}/>
</Routes> */}
<UserHomepage/>
</div>
  )
}

export default App;
