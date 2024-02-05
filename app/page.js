"use client"
import React from 'react';
import Link from 'next/link';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Form from './Components/ProjectDetails';
import Main from './Components/Main';
// import Form from './Components/DevelopmentDetails';
// import Form from './Components/ProjectD';


// Header component
// const Header = () => (
//   <header className="p-4 bg-blue-500 text-white">
//     <div className="flex justify-between items-center">
//       <h1 className="text-lg">Telangana REAL ESTATE REGULATORY AUTHORITY </h1>
//       <nav>
//         <a href="#" className="mx-2">Home</a> | <a href="#" className="mx-2">FAQ</a> | <a href="#" className="mx-2">Map</a>
//       </nav>
//     </div>
//     <div className="mt-2">
//       <a href="#" className="mx-2">Skip to main Content</a> | <a href="#" className="mx-2">Screen Reader Access</a> | <a href="#" className="mx-2">Login</a>
//     </div>
//     <div className="mt-2">
//       <nav>
//         <a href="#" className="mx-2">ABOUT US</a> | <a href="#" className="mx-2">WEBSITE GUIDE</a> | <a href="#" className="mx-2">REGULATORY DOCUMENTS</a> | <a href="#" className="mx-2">MISC PRE/RENT/BUILDITY*</a> | <a href="#" className="mx-2">JUDGEMENTS</a> | <a href="#" className="mx-2">HEARING LIST</a>
//       </nav>
//     </div>
//   </header>
// );

// // Search component
// const Search = () => (
//   <div className="search">
//     <input type="text" placeholder="Project Name, Builder, Agent" class="input1" />
//   </div>
// );

// // Main component
// const Main = () => (
//   <main class="main1">
//     <Search />
//     {/* Add other components as needed */}
//   </main>
// );


//Input component
const Input = ({ label, placeholder }) => (
  <div class="Input">
    <label class ="label">{label}</label>
    <input class ="maininput" type="text" placeholder={placeholder} />
  </div>
);

// Form component
// const Form = () => (
//   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <h2 className="mb-4 font-bold text-lg">PROJECT DETAIL</h2>
//     <div className=" -mx-3">
//       <div className="w-full  px-3 mb-6 md:mb-0">
//         <div className = "content w-full">
//           {/* <label>1.1 Project Name</label>
//           <input placeholder='Kunj Vani Villa'></input> */}
//            <Input label="1.1 Project Name*" placeholder="Kunj Vani Villa" /> 
//           <Input label="1.2 Project Type*" placeholder="Residential" />
//           <Input label="1.3 Project Description*" placeholder="Flat with all facilities..." />
//         </div>
//         <Input label="1.1 Project Name*" placeholder="Kunj Vani Villa" />
//         <Input label="1.2 Project Type*" placeholder="Residential" />
//         <Input label="1.3 Project Description*" placeholder="Flat with all facilities..." />
//         <Input label="1.4 Explanatory Note by Promoter (Reasons)*" placeholder="Guidance on Scenario (Circular 8 - PDF)" />
//         <Input label="1.5 Project Start Date*" placeholder="05/04/2020" />
//         <Input label="1.6 Project End Date*" placeholder="31/01/2024" />
//         <Input label="1.7 Total Land Area of Approved Layout(Sq Mtrs)*" placeholder="5433543" />
//         <Input label="1.8 Total Covered Land Area(Sq Mtrs)*" placeholder="554434" />
//         <Input label="1.9 Total Open Land Area(Sq Mtrs)*" placeholder="4879109" />
//         <Input label="1.10 Land Area for Project Under Registration(Sq Mtrs)*" placeholder="4879109" />
//         <Input label="1.11 Total Carpet area under approved layout(Sq Mtrs)*" placeholder="4879109" />
//         <Input label="1.12 Total Carpet Area for Project Under Registration (Sq Mtrs)*" placeholder="4879109" />
//         <Input label="1.13 No. of Garages*" placeholder="4879109" />
//         <Input label="1.14 Area of Garage (Sq Mtrs)*" placeholder="4879109" />
//         <Input label="1.15 No. of Open Parking*" placeholder="4879109" />
//         <Input label="1.16 No. Of Covered Parking*" placeholder="4879109" />
//         <Input label="1.18 Area Of Covered Parking (Sq Mtrs)*" placeholder="4879109" />
//         <Input label="1.19 Is the Project in TP Area?*" placeholder="4879109" />

//         {/* Add more input fields as needed */}
//       </div>
//     </div>
//     <h2 className="mb-4 font-bold text-lg">PROJECT RELATED LAND REVENUE DETAILS</h2>
//     <div className="flex flex-wrap -mx-3">
//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <Input label="1.20 TP No:" placeholder="" required />
//         <Input label="1.21 TP Name:" placeholder="" />
//         <Input label="1.22 Final Plot No:" placeholder="" />
//         <Input label="1.23 Sub Plot No:" placeholder="" />
//         <Input label="1.24 Plot No:" placeholder="" />
//         <Input label="1.25 Mojlo (Add Multiple Mojle separated by comma):" placeholder="mojlo/abc" />
//         <Input label="1.26 Revenue Survey No./Block No.(Add multiple Revenue Survey Nos. separated by comma)" placeholder="mojlo/abc" />
//         <Input label="1.27 City Survey No :" placeholder="mojlo/abc" />
//         <Input label="1.28 Project Address Line 1" placeholder="mojlo/abc" />
//         <Input label="1.29 Project Address Line 2" placeholder="mojlo/abc" />
//         <Input label="1.30 Pincode" placeholder="mojlo/abc" />
//         <Input label="1.31 State/UT" placeholder="mojlo/abc" />
//         <Input label="1.33 Town Planning :" placeholder="mojlo/abc" />
//         <Input label="1.34 Taluka :" placeholder="mojlo/abc" />
//         {/* Add more input fields as needed */}
//       </div>
//     </div>
//     <div className="form">
//         < section className="proximity">
//           <h2 className="text-xl font-bold">PROXIMITY</h2>
//           <div className="flex flex-wrap -mx-3">
//            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <Input label="1.35 Fire Station Distance from the Projects(Km)" placeholder="" required />
//         <Input label="1.36 Multi-Speciality Hospital Distance from Projects(Km)" placeholder="" />
//         <Input label="1.37 Main Railway Station Distance from the Projects(Km)" placeholder="" />
//         <Input label="1.38 Police Station Distance from the Projects(Km)" placeholder="" />
//         <Input label="1.39 Public Garden Distance from the Projects(Km)" placeholder="" />
//         <Input label="1.40 Public Transit Distance from the Projects(Km)" placeholder="mojlo/abc" />
//         <Input label="1.41 ULB Service delivery point Distance from the Projects(Km)" placeholder="mojlo/abc" />
//         <Input label="1.42 Airport Distance from the Projects(Km)" placeholder="mojlo/abc" />
        
//         {/* Add more input fields as needed */}
//       </div>
//     </div>
//           {/* Add your input fields here */}
//         </ section>

//         < section className="Ground Water Level">
//           <h2 className="text-xl font-bold">GROUND WATER LEVEL</h2>
//            <div className="flex flex-wrap -mx-3">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <Input label="1.43Soil testing report" placeholder="" />
//             </div>
//           </div>
//         </ section>

//         < section className="bankDetail">
//           <h2 className="text-xl font-bold">BANK DETAIL</h2>
//           {/* Add your input fields here */}
//           <div className="flex flex-wrap -mx-3">
//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <Input label="1.44 A/c Holder Name as per Bank Statement/ Passbook" placeholder="" />
//         <Input label="1.45 Account Number" placeholder="" required />
//         <Input label="1.46 IFSC Code" placeholder="" />
//         <Input label="1.47 Bank Name" placeholder="" />
//         <Input label="1.48 Branch Name" placeholder="" />
//         <Input label="1.49 Pincode" placeholder="mojlo/abc" />
//         <Input label="1.50 State/UT" placeholder="mojlo/abc" />
//         <Input label="1.51 District" placeholder="mojlo/abc" />
//         <Input label="1.52 Taluka" placeholder="mojlo/abc" />
//         <Input label="1.53 RERA Bank Account Statement or First Page of Passbook" placeholder="mojlo/abc" />
//         {/* Add more input fields as needed */}
//       </div>
//     </div>
//         </ section>

//         {/* Add more  sections as needed */}

//         <div className="flex justify-center mt-4">
//           <button type="submit" className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
//             Next
//           </button>
//         </div>
//       </div>
//     {/* Add more input fields or other form elements as needed */}
//   </form>
  
// );
// const Form = () => (

// <form>  
//     <h2 class="heading1">PROJECT DETAIL</h2>
//     <div class='projectdetails'>
//       <div class="labels">
//         <Input label="1.1 Project Name*" placeholder="Kunj Vani Villa" />
//         <Input label="1.2 Project Type*" placeholder="Residential" />
//         <Input  label="1.3 Project Description*" placeholder="Flat with all facilities..." />
//       </div>
//       <div class='bigdiv' >
//         <Input label="1.4 Explanatory Note by Promoter (Reasons)*" placeholder="Guidance on Scenario (Circular 8 - PDF)" />
//       </div>
//       <div class="labels">
//         <Input label="1.5 Project Start Date*" placeholder="05/04/2020" />
//         <Input label="1.6 Project End Date*" placeholder="31/01/2024" />
//         <Input label="1.7 Total Land Area of Approved layout(Sq Mtrs.)*" placeholder="5432223" />
//       </div>
//       <div class="labels">
//         <Input label="1.8 Total Covered Land Area*" placeholder="453389" />
//         <Input label="1.9 Total Open Land Area" placeholder="1298776" />
//         <Input label="1.10 Land Area for Project Under Registration*" placeholder="66544" />
//       </div>
//       <div class="labels">
//         <Input label="1.11 Total Carpet Area under approved layout*" placeholder="544344" />
//         <Input label="1.12 Total Carpet Area for Project under registration" placeholder="4500" />
//         <Input label="1.13 No. of Garages*" placeholder="5" />
//       </div>
//       <div class="labels">
//         <Input label="1.14 Total Covered Land Area*" placeholder="453389" />
//         <Input label="1.15 Total Open Land Area" placeholder="1298776" />
//         <Input label="1.16 Area of Garage(Sq. Mtrs)*" placeholder="655" />
//       </div>
//       <div class="labels">
//         <Input label="1.17 Area of Open Parking*(Sq. Mtrs)" placeholder="453389" />
//         <Input label="1.18 Area of Covered Parking*(Sq. Mtrs)" placeholder="1298776" />
//       </div>
//       <div class="radioinput">
//         <label class="openlabel"> 1.19 Is the Project in TP Area?*</label>
//         <input type="radio" placeholder="" name='tparea'/>Yes(TP Area including Gamtal Area)
//         <input type="radio" placeholder="" name='tparea'/>No(Non TP Area)
        
//       </div>
//     </div>


//     <h2 class="heading2">PROJECT RELATED LAND REVENUE DETAILS</h2>
//     <div id="head2div">
//       <div class="labels">
//         <Input label="1.20 TP No" placeholder="" />
//         <Input label="1.21 TP Name" placeholder="" />
//         <Input label="1.22 Final Plot No." placeholder="" />
//       </div>
//       <div class="labels">
//         <Input label="1.23 Sub Plot No." placeholder="" />
//         <Input label="1.24 Plot No." placeholder="" />
//         <Input label="1.25 Mojlo (Add Multiple Mojle separated by comma)*" placeholder="mojlo/abc" />
//       </div>
//       <div class="longlabels labels">
//         <Input label="1.26 Revenue Survey No./Block No.(Add multiple Revenue Survey Nos. seperated by comma)*" placeholder="na" />
//         <Input label="1.27 City Survey No." placeholder="na" />
//       </div>

//       <div class="labels Adrlabels">
//         <Input label="1.28 Project Address Line 1*" placeholder="Vastrapur Road" />
//         <Input label="1.29 Project Address Line 2" placeholder="" />
//       </div>

//       <div class="labels">
//         <Input label="1.30 Pincode" placeholder="380051" />
//         <Input label="1.31 State/UT" placeholder="Gujrat" />
//         <Input label="1.32 District" placeholder="Ahmedabad" />
//       </div>
//       <div class="labels">
//         <Input label="1.33 Town Planning Authority" placeholder="Balva Muncipality" />
//         <Input label="1.34 Taluka" placeholder="Ahmedabad City" />
//       </div>


//     </div>
//     <div>
//         < section >
//           <h2 class="heading1">PROXIMITY</h2>
//           <div class='projectdetails'>
//           <div class="labels">
//              <Input label="1.35 Fire Station Distance from the Projects(Km)" placeholder="2" />
//              <Input label="1.36 Multi-Speciality Hospital Distance From Projects(Km)" placeholder="2" />
//              <Input label="1.37 Main Railways Station Distance from the Projects(Km)" placeholder="2" />
//           </div>          
//           <div class="labels">
//              <Input label="1.38 Police Station Distance from the Projects(Km)" placeholder="2" />
//              <Input label="1.39 Public Garden Distance From Projects(Km)" placeholder="2" />
//              <Input label="1.40 Public Transit Distance from the Projects(Km)" placeholder="2" />
//           </div> 
//           <div class="labels longlabels">
//              <Input label="1.41 ULB Service delivery point Distance from the Projects(Km)" placeholder="2" />
//              <Input label="1.42 Airport Distance From Projects(Km)" placeholder="2" />
//           </div>
//           </div>
          
//         </ section>

//         < section >
//           <h2 class="heading1">GROUND WATER LEVEL</h2>
//           <div class='projectdetails'>
//             <label class="openlabel">1.43 Soil Testing report*</label>
//             <h4>Not Applicable</h4>
//           </div>
//         </ section>

//           <h2 class="heading3">BANK DETAIL</h2>
//           < section className="bankDetail">
//           <div class="labels">
//           <Input label="1.44 A/c Holder Name as per Bank Statement/ Passbook" placeholder="" />
//           <Input label="1.45 Account Number" placeholder="" required />
//           <Input label="1.46 IFSC Code" placeholder="" />
//           </div>
//           <div class="labels">
//           <Input label="1.47 Bank Name" placeholder="" />
//           <Input label="1.48 Branch Name" placeholder="" />
//           <Input label="1.49 Pincode" placeholder="mojlo/abc" />
//           </div>
//           <div class="labels">          
//           <Input label="1.50 State/UT" placeholder="mojlo/abc" />
//           <Input label="1.51 District" placeholder="mojlo/abc" />
//           <Input label="1.52 Taluka" placeholder="mojlo/abc" />
//           </div>
//           <Input label="1.53 RERA Bank Account Statement or First Page of Passbook" placeholder="mojlo/abc" />
//           {/* Add more input fields as needed */}
      
//         </ section>

//         {/* Add more  sections as needed */}

//         <div>
//           <button type="submit">
//             Next
//           </button>
//         </div>
//       </div>
//     {/* Add more input fields or other form elements as needed */}
//   </form>
// );

// Sidebar component
// const Sidebar = () => (
//   <div className="bg-gray-200 p-4">
//     <h2 className="mb-4 font-bold text-lg">Navigation</h2>
//     <nav>
//       <a href="#" className="block mb-2">Project Detail</a>
//       <a href="#" className="block mb-2">Development Detail</a>
//       <a href="#" className="block mb-2">Add Professional</a>
//       <a href="#" className="block mb-2">Upload Document</a>
//       <a href="#" className="block mb-2">Block Entry</a>
//       <a href="#" className="block mb-2">Assign Professionals</a>
//       <a href="#" className="block mb-2">Perform Certification</a>
//       <a href="#" className="block mb-2">Payment Page</a>
//       {/* Add more navigation links as needed */}
//     </nav>
//   </div>
// );

// Form component
// const Form1 = () => (
//   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <h2 className="mb-4 font-bold text-lg">PROJECT RELATED LAND REVENUE DETAILS</h2>
//     <div className="flex flex-wrap -mx-3">
//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <Input label="1.20 TP No:" placeholder="" />
//         <Input label="1.21 TP Name:" placeholder="" />
//         <Input label="1.22 Final Plot No:" placeholder="" />
//         {/* Add more input fields as needed */}
//       </div>
//       <div className="w-full md:w-1/2 px-3">
//         <Input label="1.23 Sub Plot No:" placeholder="" />
//         <Input label="1.24 Plot No:" placeholder="" />
//         <Input label="1.25 Mojlo (Add Multiple Mojle separated by comma):" placeholder="mojlo/abc" />
//         {/* Add more input fields as needed */}
//       </div>
//     </div>
//     {/* Add more input fields or other form elements as needed */}
//   </form>
// );

// App component
const App = () => (
  <div class="app">
    {/* <Main />
    <Header /> */}
    <div class = "main">
      <div class = "side">
      <Sidebar /></div>
      <div class = "form">
      <Form/>
      </div>
    </div>
    {/* <Form /> */}
    {/* <Form1 /> */}
  </div>
);




export default App;
