"use client";
import Link from "next/link";
import "./Style.css";
// import React, { useState } from 'react';

// const FileUpload = ({ label }) => {
//   const [fileName, setFileName] = useState('');

//   const onFileUpload = (e) => {
//     if (e.target.files.length > 0) {
//       setFileName(e.target.files[0].name);
//     }
//   };

//   return (
//     <div className="file-upload">
//       <label>{label}</label>
//       <input type="file" class = "maininput" onChange={onFileUpload} />
//       {fileName && <p>Selected file: {fileName}</p>}
//     </div>
//   );
// };

// const TechnicalDocuments = () => {
//   const documents = [
//     'Approved Building/Plotting Plan',
//     'Approved Layout Plan',
//     "Promoter's affidavit & S.2/3 allottee approval/consent as for section 14 (2) of RERA Act.",
//     // Add other document labels here
//   ];

//   return (
//     <div className="technical-documents">
//       <h2>TECHNICAL DOCUMENTS</h2>
//       {documents.map((doc, index) => (
//         <FileUpload key={index} label={`${index + 1}. ${doc}`} />
//       ))}
//     </div>
//   );
// };

// export default TechnicalDocuments;
import React from "react";
const Input1 = () => <input type="checkbox" class="input2"></input>;
const Input = ({ label }) => (
  <>
    <div class="Input">
      <label class="label">{label}</label>
      <label htmlFor="file-upload" className="custom-file-upload">
        <i className="fa fa-cloud-upload" class="maininput"></i> File Upload
      </label>
      <input id="file-upload" class="maininput" type="file" />
    </div>
  </>
);

class FileUploadButton extends React.Component {
  render() {
    return (
      <form>
        <h2 class="heading1">DOCUMENTS</h2>
        <h2 class="heading1">TECHNICAL DOCUMENTS</h2>
        <div class="projectdetails">
          <div class="labels">
            <Input label="4.1 Approved Building/Plotting Plan*" />
            <Input label="4.2 Approved Layout Plan*" />
            <Input label="4.3 Promoter’s affidavit & 2/3 allottee approval/consent as for section 14 (2) (2) of RERA Act.*" />
          </div>
          <div class="labels">
            <Input label="4.4 Approved Section Plan/Infrastructure Plan*" />
            <Input label="4.5 Area Development Plan of Project Area*" />
            <Input label="4.6 Draft Brochure*" />
          </div>
          <div class="labels">
            <Input label="4.7 Project Photo (JPG only)*" placeholder="453389" />
            <Input
              label="4.8 Non Agriculture (NA) Order and Fire Opinion From Authority"
              placeholder="1298776"
            />
          </div>
        </div>
        <div>
          {/* <p> */}
          <h3 className="Headers">TERMS AND CONDITIONS</h3>
          We, as promoter, hereby confirm below aspects covered in our
          application. Application is eligible for Rejection in case below
          aspects are not adhered to:
          <ul>
            <li>
              <Input1 />
              Provision of Drainage and/or Availability of STP (mentioned in
              Layout Plan) is available/planned in this project.
            </li>
            <li>
              <Input1 />
              We as Promoter hold no rights on FSI on Terrace post BU as per
              clause in Sale Deed.
            </li>
            <li>
              <Input1 />
              The Carpet Area and Drainage Line is clearly mentioned as per the
              Approved Plans/ In case, Carpet Area and Drainage Line is not
              mentioned in Approved Plans, the affidavit for Carpet Area and
              Drainage is attached along with Form B Declaration field.
            </li>
            <li>
              <Input1 />
              The Uploaded Affidavits (Form B and B1,B2 (in case of Joint
              Development Agreement - if applicable) is duly notarized)
            </li>
            <li>
              <Input1 />
              The Fire Officer opinion is to be obtained for the building , if
              applicable as per the regulations of the prevailing GDCR . For
              more details , click here
            </li>
            <li>
              <Input1 />
              Only the Approved plans are uploaded
            </li>
            <li>
              <Input1 />
              I/We , adhere to all provisions described in Order – 50 DIRECTION
              FOR SUBMISSION OF PROPER DOCUMENTS AT THE TIME OF PROJECT
              REGISTRATION APPLICATION., Know More
            </li>
          </ul>
          {/* </p> */}
        </div>

        {/* Add more  sections as needed */}

        <div class="btn1">
          <Link href="/PaymentPage">
            <button class="Nextbtn" type="submit">
              Next
            </button>
          </Link>
        </div>

        {/* Add more input fields or other form elements as needed */}
      </form>
    );
  }
}

export default FileUploadButton;
