// import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css"
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './Components/PrivateRoute';

import './App.css';

function App() {
  // checking if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return(
    <div className="App">
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        {/* not a correct way as user must me logged in to go to dashboard. So we will define a private route to handle this catch */}
        <Route path='/dashboard' element={

        <PrivateRoute isLoggedIn = {isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
        }
        />
      </Routes>
    
    </div>
  );
}

export default App;
