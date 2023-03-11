import './App.css';
import {Navigate, Route, Routes } from "react-router-dom";
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import ListVideos from './components/ListVideos.js'
import { useEffect, useState } from 'react';
function App() {
  const [isLogin,setIsLogin] = useState(false);
  useEffect(()=> {
    setIsLogin(localStorage.getItem("isLoggedIn")??false);
  },[])
  return (
    <Routes>
      <Route path='/login' Component={Login} />
      <Route path='/signup' Component={SignUp} />
      <Route path='/' element={!isLogin ? <Navigate to="/login" /> : <ListVideos />} />

    </Routes>
  );
}

export default App;
