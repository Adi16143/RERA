"use client"
import React from 'react';
import Link from 'next/link';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
// import Form from './Components/ProjectDetails';
import Form1 from '../Components/DevelopmentDetails';
// import Form from './Components/ProjectD';
import Main from '../Components/Main';

// const Search = () => (
//     <div className="search">
//       <input type="text" placeholder="Project Name, Builder, Agent" class="input1" />
//     </div>
//   );
  
//   // Main component
//   const Main = () => (
//     <main class="main1">
//       <Search />
//       {/* Add other components as needed */}
//     </main>
//   );

  const DevelopD = () => (
    <div class="app">
      {/* <Main />
      <Header /> */}
      <div class = "main">
        <div class = "side">
        <Sidebar /></div>
        <div class = "form1">
        <Form1 />
        </div>
      </div>
      {/* <Form1 /> */}
    </div>
  );
  
  
  
  
  export default DevelopD;