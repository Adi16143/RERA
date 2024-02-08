import React, { useState } from 'react';
// import Form1 from "./DevelopmentDetails";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Form = () => 
{
  const router = useRouter();
  const [project_name, setproject_name] = useState("");
  const [project_type, setproject_type] = useState("");
  const [project_desc, setproject_desc] = useState("");
  const [project_sdate, setproject_sdate] = useState(new Date());
  const [project_edate, setproject_edate] = useState();
  // const [No_inventory_booked, setNo_inventory_booked] = useState(0);
  // const [Road_system, setRoad_system] = useState("");
  // const [Water_supply, setWater_supply] = useState("");
  // const [Drainage_system, setDrainage_system] = useState("");
  // const [Electricity_supply, setElectricity_supply] = useState("");
  // const [Waste_management, setWaste_management] = useState("");
  // const [drinking_water_from_local, setdrinking_water_from_local] =
  //   useState("Yes");
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const body = {
          project_name,
          project_desc,
          project_sdate,
          project_edate,
          // No_inventory_booked: parseInt(No_inventory_booked),
          // Road_system,
          // Water_supply,
          // Drainage_system,
          // Electricity_supply,
          // Waste_management,
          // drinking_water_from_local,
        };
        console.log(body);
        fetch("/api/project_details", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
          // .then((result) => result.json())
          .then((data) => {
            console.log(data);
            router.push("/");
          });
      } catch (error) {
        console.error(error);
      }
    };
  
  return(
  <form onSubmit={handleSubmit}>
    <h2 class="heading1">PROJECT DETAIL</h2>
    <div class="projectdetails">
      <div class="labels">
        <div class="Input">
          <label class="label">1.1 Project Name*</label>
          <input class="maininput" type="text" name = "project_name" placeholder="Kunj Vani Villa " value={project_name} onChange={e =>setproject_name(e.target.value) }/>
        </div>
        <div class="Input">
          <label class="label">1.2 Project Type*</label>
          <input class="maininput" type="text" name = "project_type" placeholder="Residential" value={project_type} onChange={e =>setproject_type(e.target.value) }/>
        </div>      
        <div class="Input">
          <label class="label">1.3 Project Description*</label>
          <input class="maininput" type="text" name = "project_desc" placeholder="Flat with all facilities..." value={project_desc} onChange={e =>setproject_desc(e.target.value) }/>
        </div>    
      </div>
      <div class="bigdiv">
      <div class="Input">
          <label class="label">1.4 Explanatory Note by Promoter (Reasons)*</label>
          <input class="maininput" type="text" placeholder="Guidance on Scenario (Circular 8 - PDF)"/>
        </div>    

      </div>
      <div class="labels">
      <div class="Input">
          <label class="label">1.5 Project Start Date*</label>
          <input class="maininput" type="date" name = "project_sdate" placeholder="05/04/2020" value={project_sdate} onChange={e =>setproject_sdate(e.target.value) }/>
        </div>    
        <div class="Input">
          <label class="label">1.6 Project End Date*</label>
          <input class="maininput" type="date" name = "project_edate" placeholder="31/01/2024" value={project_edate} onChange={e =>setproject_edate(e.target.value) }/>
        </div>    
        <div class="Input">
          <label class="label">1.7 Total Land Area of Approved layout(Sq Mtrs.)*</label>
          <input class="maininput" type="number" placeholder="5432223"/>
        </div>    
      </div>
      <div class="labels">
      <div class="Input">
          <label class="label">1.8 Total Covered Land Area*</label>
          <input class="maininput" type="number"placeholder="453389"/>
        </div>    
        <div class="Input">
          <label class="label">1.9 Total Open Land Area*</label>
          <input class="maininput" type="number" placeholder="1298776"/>
        </div>    
        <div class="Input">
          <label class="label">1.10 Land Area for Project Under Registration*</label>
          <input class="maininput" type="number" placeholder="66544"/>
        </div>    
      </div>
      <div class="labels">
      <div class="Input">
          <label class="label">1.11 Total Carpet Area under approved layout*</label>
          <input class="maininput" type="number" placeholder="544344"/>
        </div>    
        <div class="Input">
          <label class="label">1.12 Total Carpet Area for Project under registration</label>
          <input class="maininput" type="number" placeholder="4500"/>
        </div>    
        <div class="Input">
          <label class="label">1.13 No. of Garages*</label>
          <input class="maininput" type="number" placeholder="5" />
        </div>    
        
      </div>
      <div class="labels">
      <div class="Input">
          <label class="label">1.14 Total Covered Land Area*</label>
          <input class="maininput" type="number" placeholder="453389"/>
        </div>    
        <div class="Input">
          <label class="label">1.15 Total Open Land Area</label>
          <input class="maininput" type="number" placeholder="1298776"/>
        </div>    
        <div class="Input">
          <label class="label">1.16 Area of Garage(Sq. Mtrs)*</label>
          <input class="maininput" type="number"placeholder="655"/>
        </div>    

      </div>
      <div class="labels">
      <div class="Input">
          <label class="label">1.17 Area of Open Parking*(Sq. Mtrs)</label>
          <input class="maininput" type="number" placeholder="453389"/>
        </div>    
        <div class="Input">
          <label class="label">1.18 Area of Covered Parking*(Sq. Mtrs)</label>
          <input class="maininput" type="number" placeholder="1298776"/>
        </div>

      </div>
      <div class="radioinput">
        <label class="openlabel"> 1.19 Is the Project in TP Area?*</label>
        <input type="radio" placeholder="" name="tparea" />
        Yes(TP Area including Gamtal Area)
        <input type="radio" placeholder="" name="tparea" />
        No(Non TP Area)
      </div>
    </div>

    <h2 class="heading2">PROJECT RELATED LAND REVENUE DETAILS</h2>
    <div id="head2div">
      <div class="labels">
      <div class="Input">
          <label class="label">1.20 TP No</label>
          <input class="maininput" type="number" placeholder=""/>
        </div>
        <div class="Input">
          <label class="label">1.21 TP Name</label>
          <input class="maininput" type="number" placeholder=""/>
        </div>
        <div class="Input">
          <label class="label">1.22 Final Plot No.</label>
          <input class="maininput" type="number" placeholder=""/>
        </div>
      </div>
      <div class="labels">
        <div class="Input">
          <label class="label">1.23 Sub Plot No.</label>
          <input class="maininput" type="number" placeholder=""/>
        </div>
        <div class="Input">
          <label class="label">1.24 Plot No.</label>
          <input class="maininput" type="number" placeholder=""/>
        </div>
        <div class="Input">
          <label class="label">1.25 Mojlo (Add Multiple Mojle separated by comma)*</label>
          <input class="maininput" type="text" placeholder="mojlo/abc"/>
        </div>

      </div>
      <div class="longlabels labels">
      <div class="Input">
          <label class="label">1.26 Revenue Survey No./Block No.(Add multiple Revenue Survey Nos. seperated by comma)*</label>
          <input class="maininput" type="text" placeholder="na"/>
        </div>
        <div class="Input">
          <label class="label">1.27 City Survey No.</label>
          <input class="maininput" type="number" placeholder="na"/>
        </div>
      </div>

      <div class="labels Adrlabels">
      <div class="Input">
          <label class="label">1.28 Project Address Line 1*</label>
          <input class="maininput" type="text" placeholder="Vastrapur Road"/>
        </div>
        <div class="Input">
          <label class="label">1.29 Project Address Line 2*</label>
          <input class="maininput" type="text" placeholder=""/>
        </div>

      </div>

      <div class="labels">
      <div class="Input">
          <label class="label">1.30 Pincode</label>
          <input class="maininput" type="number" placeholder="380051"/>
        </div>
        <div class="Input">
          <label class="label">1.31 State/UT</label>
          <input class="maininput" type="text" placeholder="Gujrat"/>
        </div>
        <div class="Input">
          <label class="label">1.32 District</label>
          <input class="maininput" type="text" placeholder="Ahmedabad"/>
        </div>
      </div>
      <div class="labels">
      <div class="Input">
          <label class="label">1.33 Town Planning Authority</label>
          <input class="maininput" type="text" placeholder="Balva Muncipality"/>
        </div>
        <div class="Input">
          <label class="label">1.34 Taluka</label>
          <input class="maininput" type="text" placeholder="Ahmedabad City"/>
        </div>

      </div>
    </div>
    <div>
      <section>
        <h2 class="heading1">PROXIMITY</h2>
        <div class="projectdetails">
          <div class="labels">
          <div class="Input">
          <label class="label">1.35 Fire Station Distance from the Projects(Km)</label>
          <input class="maininput" type="number" placeholder="2"/>
        </div>
        <div class="Input">
          <label class="label">1.36 Multi-Speciality Hospital Distance From Projects(Km)</label>
          <input class="maininput" type="number" placeholder="2"/>
        </div>
        <div class="Input">
          <label class="label">1.37 Main Railways Station Distance from the Projects(Km)</label>
          <input class="maininput" type="number" placeholder="2"/>
        </div>


          </div>
          <div class="labels">
          <div class="Input">
          <label class="label">1.38 Police Station Distance from the Projects(Km)</label>
          <input class="maininput" type="number" placeholder="2"/>
          </div>
          <div class="Input">
          <label class="label">1.39 Public Garden Distance From Projects(Km)</label>
          <input class="maininput" type="number" placeholder="2"/>
        </div>
        <div class="Input">
          <label class="label">1.40 Public Transit Distance from the Projects(Km)</label>
          <input class="maininput" type="number" placeholder="2"/>
        </div>

          </div>
          <div class="labels longlabels">
          <div class="Input">
          <label class="label">1.41 ULB Service delivery point Distance from the Projects(Km)</label>
          <input class="maininput" type="number" placeholder="2"/>
        </div>
        <div class="Input">
          <label class="label">1.42 Airport Distance From Projects(Km)</label>
          <input class="maininput" type="number" placeholder="2"/>
        </div>

          </div>
        </div>
      </section>

      <section>
        <h2 class="heading1">GROUND WATER LEVEL</h2>
        <div class="projectdetails">
          <label class="openlabel">1.43 Soil Testing report*</label>
          <h4>Not Applicable</h4>
        </div>
      </section>

      <h2 class="heading3">BANK DETAIL</h2>
      <section className="bankDetail">
        <div class="labels">
        <div class="Input">
          <label class="label">1.44 A/c Holder Name as per Bank Statement/ Passbook</label>
          <input class="maininput" type="text" placeholder=""/>
        </div>
        <div class="Input">
          <label class="label">1.45 Account Number"</label>
          <input class="maininput" type="number" placeholder=""/>
        </div>
        <div class="Input">
          <label class="label">1.46 IFSC Code</label>
          <input class="maininput" type="number" placeholder=""/>
        </div>
        </div>
        <div class="labels">
        <div class="Input">
          <label class="label">1.47 Bank Name</label>
          <input class="maininput" type="text" placeholder=""/>
        </div>
        <div class="Input">
          <label class="label">1.48 Branch Name</label>
          <input class="maininput" type="number" placeholder=""/>
        </div>
        <div class="Input">
          <label class="label">1.49 Pincode</label>
          <input class="maininput" type="text" placeholder="mojlo/abc"/>
        </div>
        </div>
        <div class="labels">
        <div class="Input">
          <label class="label">1.50 State/UT</label>
          <input class="maininput" type="text" placeholder="mojlo/abc"/>
        </div>
        <div class="Input">
          <label class="label">1.51 District</label>
          <input class="maininput" type="text" placeholder="mojlo/abc"/>
        </div>
        <div class="Input">
          <label class="label">1.52 Taluka</label>
          <input class="maininput" type="text" placeholder="mojlo/abc"/>
        </div>
          
        </div>
        <div class="labels">
        <div class="Input">
          <label class="label">1.53 RERA Bank Account Statement or First Page of Passbook</label>
          <input class="maininput" type="text" placeholder="mojlo/abc"/>
        </div>
        <button type="submit" className="add-button1">
          Add
        </button>
        </div>
        {/* Add more input fields as needed */}
      </section>
      
      {/* Add more  sections as needed */}

      <div class="btn1">
        <Link href="/DevelopD">
          <button class="Nextbtn" type="submit">
            Next
          </button>
        </Link>
      </div>
    </div>
   
    {/* Add more input fields or other form elements as needed */}
  </form>
  );
 
  }



export default Form;
