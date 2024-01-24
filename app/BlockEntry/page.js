"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";
function BlockEntry() {
  return (
    <div class="professional">
      <MyForm />
      <br></br>
    </div>
  );
}
const Input = ({ label, placeholder }) => (
  <div class="Input">
    <label class="label">{label}</label>
    <input class="maininput" type="text" placeholder={placeholder} />
  </div>
);
const Input1 = ({ label }) => (
    <>
      <div class="Input">
        <label class="label">{label}</label>
        <label htmlFor="file-upload" className="custom-file-upload">
          <i className="fa fa-cloud-upload"></i> File Upload
        </label>
        <input id="file-upload" type="file" />
      </div>
    </>
  );
const MyForm = () => {
  const [formData, setFormData] = useState({
    panNo: "",
    panNo1: "",
    names: "",
    mobile: "",
    reraNo: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Data:", formData);
    // You can send the form data to your server or perform any other actions
  };

  return (
    <div className="forms">
      <div className="heading">
        <br></br>
        <h3>BLOCK ENTRY </h3>
        <hr></hr>
        <h2>ADD BLOCK DETAILS </h2>
        <hr></hr>
      </div>

      <form className="my-form" onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label className='labels'>
            PAN No :<br></br>
            <input 
              type="text"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
              required
            />
             <button className="submit-button">Search</button>
          </label>
  
          <label>
            RERA Registration No :<br></br>
            <input className="inputs"
              type="text"
              name="reraNo"
              value={formData.reraNo}
              onChange={handleChange}
              required
            />
          </label>
  
          <label>
            Name :<br></br>
            <input className="inputs"
              type="text"
              name="names"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div> */}
        {/* <div className="form-group">
        <label>
            PAN No. :<br></br>
            <input className="inputs"
              type="text"
              name="panNo1"
              value={formData.panNo1}
              onChange={handleChange}
              required
            />
          </label>
        
          <label>
            Email Id :<br></br>
            <input className="inputs"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
  
          <label>
            Mobile No. :<br></br>
            <input className="inputs"
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
        </div>
  
        <div className="form-group">
          <label>
            Address :<br></br>
            <input className="inputs"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          </div>  */}
        <div class="projectdetails">
          <div class="labels">
            <Input label="4.1 Block Name*" placeholder=" " />
            <Input label="4.2 Development Start Date*" placeholder="dd-mm-yyyy" />
            <Input
              label="4.3 Project Description*"
              placeholder=" "
            />
          </div>

          <div class="labels">
            <Input1 label="4.4 Commencement Certificate*" />
            <Input label="4.5 Date on Commencement Certificate *" placeholder="dd-mm-yyyy" />
            <Input
              label="4.6 Commencement Certificate No*"
              placeholder=" "
            />
          </div>
          <div class="labels">
            <Input label="4.7 Height (In Meter)*" placeholder=" " />
            <Input label="4.8 FSI of Block(In Sq Meter) *" placeholder=" " />
            <Input
              label="4.9 Built-up Area of BLock(In Sq Meter) *"
              placeholder=" "
            />
          </div>
        </div>
        <button className="add-button">Add</button>
        <Link href="/DocumentsUpload">
          <button className="submit-buttons">Previous</button>
        </Link>
        <Link href="/AssignProfessional">
          <button className="submit-button">Next</button>
        </Link>
      </form>
    </div>
  );
};

export default BlockEntry;
