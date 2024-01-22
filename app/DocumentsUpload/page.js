"use client"
import React, { useState } from 'react';

const FileUpload = ({ label }) => {
  const [fileName, setFileName] = useState('');

  const onFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="file-upload">
      <label>{label}</label>
      <input type="file" onChange={onFileUpload} />
      {fileName && <p>Selected file: {fileName}</p>}
    </div>
  );
};

const TechnicalDocuments = () => {
  const documents = [
    'Approved Building/Plotting Plan',
    'Approved Layout Plan',
    "Promoter's affidavit & S.2/3 allottee approval/consent as for section 14 (2) of RERA Act.",
    // Add other document labels here
  ];

  return (
    <div className="technical-documents">
      <h2>TECHNICAL DOCUMENTS</h2>
      {documents.map((doc, index) => (
        <FileUpload key={index} label={`${index + 1}. ${doc}`} />
      ))}
    </div>
  );
};

export default TechnicalDocuments;
