const Input = ({ label, placeholder }) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={placeholder} />
    </div>
  );
  
  // Form component
  const Form = () => (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="mb-4 font-bold text-lg">PROJECT DETAIL</h2>
      <div className=" -mx-3">
        <div className="w-full  px-3 mb-6 md:mb-0">
          <div className = "content w-full">
            {/* <label>1.1 Project Name</label>
            <input placeholder='Kunj Vani Villa'></input> */}
             <Input label="1.1 Project Name*" placeholder="Kunj Vani Villa" /> 
            <Input label="1.2 Project Type*" placeholder="Residential" />
            <Input label="1.3 Project Description*" placeholder="Flat with all facilities..." />
          </div>
          <Input label="1.1 Project Name*" placeholder="Kunj Vani Villa" />
          <Input label="1.2 Project Type*" placeholder="Residential" />
          <Input label="1.3 Project Description*" placeholder="Flat with all facilities..." />
          <Input label="1.4 Explanatory Note by Promoter (Reasons)*" placeholder="Guidance on Scenario (Circular 8 - PDF)" />
          <Input label="1.5 Project Start Date*" placeholder="05/04/2020" />
          <Input label="1.6 Project End Date*" placeholder="31/01/2024" />
          <Input label="1.7 Total Land Area of Approved Layout(Sq Mtrs)*" placeholder="5433543" />
          <Input label="1.8 Total Covered Land Area(Sq Mtrs)*" placeholder="554434" />
          <Input label="1.9 Total Open Land Area(Sq Mtrs)*" placeholder="4879109" />
          <Input label="1.10 Land Area for Project Under Registration(Sq Mtrs)*" placeholder="4879109" />
          <Input label="1.11 Total Carpet area under approved layout(Sq Mtrs)*" placeholder="4879109" />
          <Input label="1.12 Total Carpet Area for Project Under Registration (Sq Mtrs)*" placeholder="4879109" />
          <Input label="1.13 No. of Garages*" placeholder="4879109" />
          <Input label="1.14 Area of Garage (Sq Mtrs)*" placeholder="4879109" />
          <Input label="1.15 No. of Open Parking*" placeholder="4879109" />
          <Input label="1.16 No. Of Covered Parking*" placeholder="4879109" />
          <Input label="1.18 Area Of Covered Parking (Sq Mtrs)*" placeholder="4879109" />
          <Input label="1.19 Is the Project in TP Area?*" placeholder="4879109" />
  
          {/* Add more input fields as needed */}
        </div>
      </div>
      <h2 className="mb-4 font-bold text-lg">PROJECT RELATED LAND REVENUE DETAILS</h2>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input label="1.20 TP No:" placeholder="" required />
          <Input label="1.21 TP Name:" placeholder="" />
          <Input label="1.22 Final Plot No:" placeholder="" />
          <Input label="1.23 Sub Plot No:" placeholder="" />
          <Input label="1.24 Plot No:" placeholder="" />
          <Input label="1.25 Mojlo (Add Multiple Mojle separated by comma):" placeholder="mojlo/abc" />
          <Input label="1.26 Revenue Survey No./Block No.(Add multiple Revenue Survey Nos. separated by comma)" placeholder="mojlo/abc" />
          <Input label="1.27 City Survey No :" placeholder="mojlo/abc" />
          <Input label="1.28 Project Address Line 1" placeholder="mojlo/abc" />
          <Input label="1.29 Project Address Line 2" placeholder="mojlo/abc" />
          <Input label="1.30 Pincode" placeholder="mojlo/abc" />
          <Input label="1.31 State/UT" placeholder="mojlo/abc" />
          <Input label="1.33 Town Planning :" placeholder="mojlo/abc" />
          <Input label="1.34 Taluka :" placeholder="mojlo/abc" />
          {/* Add more input fields as needed */}
        </div>
      </div>
      <div className="form">
          <section className="proximity">
            <h2 className="text-xl font-bold">PROXIMITY</h2>
            <div className="flex flex-wrap -mx-3">
             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input label="1.35 Fire Station Distance from the Projects(Km)" placeholder="" required />
          <Input label="1.36 Multi-Speciality Hospital Distance from Projects(Km)" placeholder="" />
          <Input label="1.37 Main Railway Station Distance from the Projects(Km)" placeholder="" />
          <Input label="1.38 Police Station Distance from the Projects(Km)" placeholder="" />
          <Input label="1.39 Public Garden Distance from the Projects(Km)" placeholder="" />
          <Input label="1.40 Public Transit Distance from the Projects(Km)" placeholder="mojlo/abc" />
          <Input label="1.41 ULB Service delivery point Distance from the Projects(Km)" placeholder="mojlo/abc" />
          <Input label="1.42 Airport Distance from the Projects(Km)" placeholder="mojlo/abc" />
          
          {/* Add more input fields as needed */}
        </div>
      </div>
            {/* Add your input fields here */}
          </section>
  
          <section className="Ground Water Level">
            <h2 className="text-xl font-bold">GROUND WATER LEVEL</h2>
             <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input label="1.43Soil testing report" placeholder="" />
              </div>
            </div>
          </section>
  
          <section className="bankDetail">
            <h2 className="text-xl font-bold">BANK DETAIL</h2>
            {/* Add your input fields here */}
            <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input label="1.44 A/c Holder Name as per Bank Statement/ Passbook" placeholder="" />
          <Input label="1.45 Account Number" placeholder="" required />
          <Input label="1.46 IFSC Code" placeholder="" />
          <Input label="1.47 Bank Name" placeholder="" />
          <Input label="1.48 Branch Name" placeholder="" />
          <Input label="1.49 Pincode" placeholder="mojlo/abc" />
          <Input label="1.50 State/UT" placeholder="mojlo/abc" />
          <Input label="1.51 District" placeholder="mojlo/abc" />
          <Input label="1.52 Taluka" placeholder="mojlo/abc" />
          <Input label="1.53 RERA Bank Account Statement or First Page of Passbook" placeholder="mojlo/abc" />
          {/* Add more input fields as needed */}
        </div>
      </div>
          </section>
  
          {/* Add more sections as needed */}
  
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
          </div>
        </div>
      {/* Add more input fields or other form elements as needed */}
    </form>
    
  );
  export default Form;