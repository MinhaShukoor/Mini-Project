import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import UserRoutes from './UserRoutes'; 
import AdminRoutes from './AdminRoutes'; 

function App() {
  return (
    <div>
   
    <Routes>
      <Route path='/*' element={<UserRoutes/>}/>
      <Route path='/admin/*' element={<AdminRoutes/>}/>
</Routes>

</div>
  )
}

export default App;
