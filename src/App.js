
import './App.css';
import { useState } from 'react';
import Home from './components/pages/Home';
import  Register from './components/Register/Register';
import About from './components/About/About';
import {Route, Routes}  from "react-router-dom";
import Gallery from './components/gallery/Gallery';

import Main from './components/layout/main';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import NotFound from './components/pages/notFound';




function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  

    // const adminUser = {
    //   email: "admin@admin.com",
    //   password: "admin123"
    // }

    // const [user, setUser] = useState({name: "", email: ""});
    // const [error, setError] = useState("");

    // const s = () => {
    //   setIsLoggedIn(!isLoggedIn)
    // }
// const Login = details => {
//   console.log(details);
// }

// console.log = () => {
//   console.log("logout")
// }


  return ( 
    <div className="container">
      <>
      <Main>
      <Routes>

      
      

    

  <Route path='/' element={< Home/>}></Route>
  <Route path='/about' element ={< About/>}></Route>

{isLoggedIn === true ? <Route path="/register" element={<Register />}  />: <Route path="*" element={<NotFound />} />}
  <Route path='/gallery'  element={<Gallery />}></Route>

  <Route path='/sign-in'  element={<Login />}></Route>
   {/* { user.email !== "" ? <Route  path='/sign-in'  element={<Login />}  />: <Route path = "*" element={<Login />} />} */}


  <Route path='/sign-up' element={<Signup />}></Route>
    
  
      </Routes>
      </Main>
    

      </>
      
    
    </div>
  );
}

export default App;
