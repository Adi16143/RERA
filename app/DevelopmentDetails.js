import React from "react";
import Link from "next/link";
const Input = ({ label, placeholder }) => (
  <div class="Input">
    <label class ="label">{label}</label>
    <input class ="maininput" type="text" placeholder={placeholder} />
  </div>
);
const Form = () => (

    <form>  
        <h2 class="heading1">INVENTORY DETAILS</h2>
        <div class='projectdetails'>
            <div>(Please make sure that the Total Carpet area of the different types of inventories entered here, match with the Total Carpet area (6433.09 Sq. Mtr) which is entered in Project Details Section (Field no. 1.13) on previous page.)</div>
          <div class="labels">
            <Input label="2.1 Type of Inventory" placeholder="Shop" />
            <Input label="2.2 No of Inventory" placeholder="10" />
            <Input  label="2.3 Carpet Area (Sq Mtrs)*" placeholder="6433.09" />
          </div>
          {/* <div class='bigdiv' >
            <Input label="1.4 Explanatory Note by Promoter (Reasons)*" placeholder="Guidance on Scenario (Circular 8 - PDF)" />
          </div> */}
          <div class="labels">
            <Input label="2.4 Area of exclusive balcony/verandah (Sq Mtr)*" placeholder="0" />
            <Input label="2.5 Area of exclusive open terrace if any (Sq Mtr)*" placeholder="0" />
            <Input label="2.6 No. of Inventory Booked*" placeholder="0" />
          </div>
          {/* <div class="labels">
            <Input label="1.8 Total Covered Land Area*" placeholder="453389" />
            <Input label="1.9 Total Open Land Area" placeholder="1298776" />
            <Input label="1.10 Land Area for Project Under Registration*" placeholder="66544" />
          </div>
          <div class="labels">
            <Input label="1.11 Total Carpet Area under approved layout*" placeholder="544344" />
            <Input label="1.12 Total Carpet Area for Project under registration" placeholder="4500" />
            <Input label="1.13 No. of Garages*" placeholder="5" />
          </div>
          <div class="labels">
            <Input label="1.14 Total Covered Land Area*" placeholder="453389" />
            <Input label="1.15 Total Open Land Area" placeholder="1298776" />
            <Input label="1.16 Area of Garage(Sq. Mtrs)*" placeholder="655" />
          </div>
          <div class="labels">
            <Input label="1.17 Area of Open Parking*(Sq. Mtrs)" placeholder="453389" />
            <Input label="1.18 Area of Covered Parking*(Sq. Mtrs)" placeholder="1298776" />
          </div>
          <div class="radioinput">
            <label class="openlabel"> 1.19 Is the Project in TP Area?*</label>
            <input type="radio" placeholder="" name='tparea'/>Yes(TP Area including Gamtal Area)
            <input type="radio" placeholder="" name='tparea'/>No(Non TP Area)
            
          </div> */}
        </div>
    
    
        <h2 class="heading2">INTERNAL DEVELOPMENT WORK</h2>
        <div id="head2div">
          <div class="labels">
            <Input label="2.7 Road System" placeholder="Self Development" />
            <Input label="2.8 Water Supply" placeholder="Self Development" />
            <Input label="2.9 Sewage and Drainage System" placeholder="Self Development" />
          </div>
          <div class="labels">
            <Input label="2.10 Electricity Supply Transformer And Sub Station" placeholder="Self Development" />
            <Input label="2.11 Solid Waste Management And Disposal*" placeholder="Self Development" />
          </div>
          {/* <div class="longlabels labels">
            <Input label="1.26 Revenue Survey No./Block No.(Add multiple Revenue Survey Nos. seperated by comma)*" placeholder="na" />
            <Input label="1.27 City Survey No." placeholder="na" />
          </div>
    
          <div class="labels Adrlabels">
            <Input label="1.28 Project Address Line 1*" placeholder="Vastrapur Road" />
            <Input label="1.29 Project Address Line 2" placeholder="" />
          </div>
    
          <div class="labels">
            <Input label="1.30 Pincode" placeholder="380051" />
            <Input label="1.31 State/UT" placeholder="Gujrat" />
            <Input label="1.32 District" placeholder="Ahmedabad" />
          </div>
          <div class="labels">
            <Input label="1.33 Town Planning Authority" placeholder="Balva Muncipality" />
            <Input label="1.34 Taluka" placeholder="Ahmedabad City" />
          </div>
    
     */}
        </div>
        <div>
            < section >
              <h2 class="heading1">OTHER INTERNAL DEVELOPMENT WORK</h2>
              <h2 class="heading1">WATER SUPPLY</h2>
              <div class='projectdetails'>
              <div class="labels">
                 <Input label="1.35 Fire Station Distance from the Projects(Km)" placeholder="2" />
                 <Input label="1.36 Multi-Speciality Hospital Distance From Projects(Km)" placeholder="2" />
                 <Input label="1.37 Main Railways Station Distance from the Projects(Km)" placeholder="2" />
              </div>          
              <div class="labels">
                 <Input label="1.38 Police Station Distance from the Projects(Km)" placeholder="2" />
                 <Input label="1.39 Public Garden Distance From Projects(Km)" placeholder="2" />
                 <Input label="1.40 Public Transit Distance from the Projects(Km)" placeholder="2" />
              </div> 
              <div class="labels longlabels">
                 <Input label="1.41 ULB Service delivery point Distance from the Projects(Km)" placeholder="2" />
                 <Input label="1.42 Airport Distance From Projects(Km)" placeholder="2" />
              </div>
              </div>
              
            </ section>
    
            < section >
              <h2 class="heading1">GROUND WATER LEVEL</h2>
              <div class='projectdetails'>
                <label class="openlabel">1.43 Soil Testing report*</label>
                <h4>Not Applicable</h4>
              </div>
            </ section>
    
              <h2 class="heading3">BANK DETAIL</h2>
              < section className="bankDetail">
              <div class="labels">
              <Input label="1.44 A/c Holder Name as per Bank Statement/ Passbook" placeholder="" />
              <Input label="1.45 Account Number" placeholder="" required />
              <Input label="1.46 IFSC Code" placeholder="" />
              </div>
              <div class="labels">
              <Input label="1.47 Bank Name" placeholder="" />
              <Input label="1.48 Branch Name" placeholder="" />
              <Input label="1.49 Pincode" placeholder="mojlo/abc" />
              </div>
              <div class="labels">          
              <Input label="1.50 State/UT" placeholder="mojlo/abc" />
              <Input label="1.51 District" placeholder="mojlo/abc" />
              <Input label="1.52 Taluka" placeholder="mojlo/abc" />
              </div>
              <Input label="1.53 RERA Bank Account Statement or First Page of Passbook" placeholder="mojlo/abc" />
              {/* Add more input fields as needed */}
          
            </ section>
    
            {/* Add more  sections as needed */}
    
            <div class = "btn1">
              <button class = "Nextbtn"type="submit">
                <Link href = "/DevelopmentDetails"> Next</Link>
               
              </button>
            </div>
          </div>
        {/* Add more input fields or other form elements as needed */}
      </form>
    );
    export default Form;