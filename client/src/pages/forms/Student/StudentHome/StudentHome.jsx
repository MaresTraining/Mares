import React from 'react';
import './StudentHome.css'
import StudentHeader from './StudentHeader/StudentHeader'
import S_HeroSection from './S_HeroSection/S_HeroSection';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box } from '@mui/material';



const StudentHome = () => {
  return (
    <div >
      
      <StudentHeader />
      < S_HeroSection />
    
    
      <br></br>
      <br></br>
    </div>
  );
}
export default StudentHome;