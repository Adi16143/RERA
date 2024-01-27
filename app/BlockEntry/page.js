"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";

function BlockEntry() {
  const [blockData, setBlockData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      ["blockName"]: e.target.blockName.value,
      ["sDate"]: e.target.sDate.value,
      ["eDate"]: e.target.eDate.value,
      ["file"]: e.target.file.value,
      ["ccDate"]: e.target.ccDate.value,
      ["ccNo"]: e.target.ccNo.value,
      ["height"]: e.target.height.value,
      ["fsi"]: e.target.fsi.value,
      ["bArea"]: e.target.bArea.value,
    };
    const dat = [...blockData, obj];
    setBlockData(dat);
  };
  return (
    <div className="forms">
      <div className="heading">
        <br></br>
        <h3>BLOCK ENTRY </h3>
        <hr></hr>
        
      </div>

      <form className="my-form" onSubmit={handleSubmit}>
        <div>
          <table border="1" className="my-table">
            <thead>
              <tr>
                <th>Block Name</th>
                <th>Development Start Date</th>
                <th>Development End Date</th>
                <th>Commencement Certificate</th>
                <th>Date of Commencement</th>
                <th>Commencement Certificate No</th>
                <th> Height</th>
                <th>FSI of Block</th>
                <th>Built-up Area of BLock</th>
              </tr>
            </thead>
            <tbody>
              {blockData.map((dat) => (
                <tr>
                  <td>{dat.blockName}</td>
                  <td>{dat.sDate}</td>
                  <td>{dat.eDate}</td>
                  <td>{dat.file}</td>
                  <td>{dat.ccDate}</td>
                  <td>{dat.ccNo}</td>
                  <td>{dat.height}</td>
                  <td>{dat.fsi}</td>
                  <td>{dat.bArea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br/><br/>
        <h2>ADD BLOCK DETAILS </h2>
        <hr></hr>

        <div class="projectdetails">
          <div class="labels">
            <div class="Input">
              <label class="label">4.1 Block Name*</label>
              <input
                class="maininput"
                type="text"
                id="blockName"
                placeholder=" "
              />
            </div>
            <div class="Input">
              <label class="label">4.2 Development Start Date*</label>
              <input
                class="maininput"
                type="date"
                id="sDate"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div class="Input">
              <label class="label">4.3 Development End Date*</label>
              <input
                class="maininput"
                type="date"
                id="eDate"
                placeholder="dd-mm-yyyy"
              />
            </div>
          </div>
          
          <div class="labels">
            <div class="Input">
              <label class="label">4.4 Commencement Certificate*</label>
              <input class="maininput" type="file" id="file" />
            </div>
            <div class="Input">
              <label class="label">
                4.5 Date on Commencement Certificate *
              </label>
              <input
                class="maininput"
                id="ccDate"
                type="date"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div class="Input">
              <label class="label">4.6 Commencement Certificate No*</label>
              <input type="number" id="ccNo" placeholder=" " />
            </div>
          </div>
          <div class="labels">
            <div class="Input">
              <label class="label">4.7 Height (In Meter)*</label>
              <input type="number" id="height" placeholder=" " />
            </div>
            <div class="Input">
              <label class="label">4.8 FSI of Block(In Sq Meter) *</label>
              <input type="number" id="fsi" placeholder=" " />
            </div>
            <div class="Input">
              <label class="label">
                4.9 Built-up Area of BLock(In Sq Meter) *
              </label>
              <input type="number" id="bArea" placeholder=" " />
            </div>
          </div>
        </div>
        <button type="submit" className="add-button">
          Add
        </button>
        <Link href="/DocumentsUpload">
          <button className="submit-buttons">Previous</button>
        </Link>
        <Link href="/AssignProfessional">
          <button className="submit-button">Next</button>
        </Link>
      </form>
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

export default BlockEntry;
