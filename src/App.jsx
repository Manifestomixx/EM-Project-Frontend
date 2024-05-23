import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import FriendProfile from './pages/FriendProfile';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';
import Registration from './pages/Registration';
import SignIn from './auth/SignIn';
import NavBarMobile from './layout/NavBarMobile';
import Fetch from './components/Fetch';
import Post from './components/Post';

import Hero from './pages/Hero';
import Error from './pages/Error';
import { Toaster } from 'react-hot-toast';
import Bio from './components/Bio';
import Community from './pages/Community';
import SingleUserProfile from './pages/SingleUserProfile';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<> <NavBar/></>}>
    {/* <Route path='/Home' element={<Home/>}/> */}
    <Route path='/Hero' element={<Hero/>}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/FriendProfile' element={<FriendProfile/>}/>
    <Route path='/Community' element={<Community/>}/>
    <Route path='/singleuserprofile/:userId' element={<SingleUserProfile/>}/>
    </Route>
    {/* <Route path='/' element={<Home/>}/> */}
    <Route path='/Post' element={<Post/>}/>
    
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/Fetch' element={<Fetch/>}/>
    <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
    <Route path='/Registration' element={<Registration/>}/>
    
    <Route path='*' element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    <Toaster/>
    </>
  )
}

export default App
