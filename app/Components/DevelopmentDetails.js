import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { PrismaClient } from "@prisma/client";
import Link from "next/link";
const prisma = new PrismaClient();

const Input = ({ label, placeholder,type='text',onChange }) => (
  <div class="Input">
    <label class="labels1">{label}</label>
    <input class="maininput" type={type} placeholder={placeholder} 
    onChange={e=>onChange(e.target.value)}
    />
  </div>
);

const Form1 = () => {
  const router = useRouter();
  const [Type_of_inventory, setType_of_inventory] = useState("");
  const [No_of_inventory, setNo_of_inventory] = useState(0);
  const [Carpet_area, setCarpet_area] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = { Type_of_inventory, No_of_inventory:parseInt(No_of_inventory), Carpet_area:parseInt(Carpet_area) };
      console.log(body)
      fetch("/api/post", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          router.push("/");
        });
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 class="heading1">INVENTORY DETAILS</h2>
      <div class="projectdetails">
        <div>
          (Please make sure that the Total Carpet area of the different types of
          inventories entered here, match with the Total Carpet area (6433.09
          Sq. Mtr) which is entered in Project Details Section (Field no. 1.13)
          on previous page.)
        </div>
        <div class="labels">
          <Input
            name="Type_of_inventory"
            value={Type_of_inventory}
            onChange={setType_of_inventory}
            label="2.1 Type of Inventory"
            placeholder="Shop"
          />
          <Input
            name="No_of_inventory"
            value={No_of_inventory}
            onChange={setNo_of_inventory}
            label="2.2 No of Inventory"
            placeholder="10"
            type='number'
          />
          <Input
            name="Carpet_area"
            value={Carpet_area}
            onChange={setCarpet_area}
            label="2.3 Carpet Area (Sq Mtrs)*"
            placeholder="6433.09"
            type='number'
          />
        </div>
        {/* <div class='bigdiv' >
            <Input label="1.4 Explanatory Note by Promoter (Reasons)*" placeholder="Guidance on Scenario (Circular 8 - PDF)" />
          </div> */}
        <div class="labels">
          <Input
            label="2.4 Area of exclusive balcony/verandah (Sq Mtr)*"
            placeholder="0"
          />
          <Input
            label="2.5 Area of exclusive open terrace if any (Sq Mtr)*"
            placeholder="0"
          />
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
          <Input
            label="2.9 Sewage and Drainage System"
            placeholder="Self Development"
          />
        </div>
        <div class="labels">
          <Input
            label="2.10 Electricity Supply Transformer And Sub Station"
            placeholder="Self Development"
          />
          <Input
            label="2.11 Solid Waste Management And Disposal*"
            placeholder="Self Development"
          />
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
        {/* <section>
        <h2 class="heading1">OTHER INTERNAL DEVELOPMENT WORK</h2>
        <h2 class="heading1">WATER SUPPLY</h2>
        <div class="projectdetails">
          <div class="labels">
            <label>
              2.14 Whether Drinking Water is to be obtained from Municipal/Local
              Authority Pipe Line
            </label>
            <select class="maininput">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div class="labels">
            <label>
              Total quantity of drinking water required for the project as per
              NBC: (Residential)(Commercial)
              <div>
                <input type="number" />
                <input type="number" />
                <input type="text" />
              </div>
            </label>
          </div>
          <div class="radioinput">
            <label class="openlabel"> (d) Water to be supplied from:</label>
            <input type="radio" placeholder="" name="tparea" />
            Borewell at Project Site
            <input type="radio" placeholder="" name="tparea" />
            Tankers
            <input type="radio" placeholder="" name="tparea" />
            Other
          </div>
        </div>
      </section> */}
        <section>
          <h2 class="heading1">OTHER INTERNAL DEVELOPMENT WORK</h2>
          <h2 class="heading1">WATER SUPPLY</h2>
          <div class="projectdetails">
            <div class="longlabels clabels select">
              <label>
                2.14 Whether Drinking Water is to be obtained from
                Municipal/Local Authority Pipe Line
              </label>
              <select class="yesnoinput">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div class="flex longlabels clabels">
              <label>
                (a)Total quantity of drinking water required for the project as
                per NBC:
              </label>
              <Input label=" Residencial" type="number" />
              <Input label=" Commercial" type="number" />
              <Input label=" Total" type="text" />
            </div>

            <div class="flex longlabels clabels">
              <label>
                (b)Total quantity of drinking water proposed to be provided for
                the project:
              </label>
              <Input type="number" />
              <Input type="number" />
              <Input type="text" />
            </div>

            <div class="oneflex longlabels clabels">
              <label>(c)Total water proposed to be provided as % of (a):</label>
              <Input type="text" />
            </div>

            <div class="radioinput">
              <label class="openlabel"> (d) Water to be supplied from:</label>
              <div class="radioflex">
                <input type="radio" placeholder="" name="tparea" />
                Borewell at Project Site
                <input type="radio" placeholder="" name="tparea" />
                Tankers
                <input type="radio" placeholder="" name="tparea" />
                Other
              </div>
            </div>
          </div>
        </section>
        {/* <h2 class="heading3">SEWARAGE DISPOSAL</h2>
      <section className="bankDetail">
        <div class="projectdetails">
          <label class="label1">
            2.15 Whether sewerage pipe line of Municipal/local authority is
            available near by the project site to which sewerage line of project
            can be connected?
            <select name="seweragePipeLine">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
          <label>
            (a) Quantity of sewerage which is expected to generate from the
            project as per NBC
            <input type="number" name="residentialSewerage" />
            (Residential)
            <input type="number" name="commercialSewerage" />
            (Commercial)
          </label>
          <label>
            (b) Total quantity of sewerage proposed to be provided for the
            project
            <input type="number" name="totalSewerage" />
          </label>
          <label>
            How sewerage of the project will be treated
            <select name="treatmentMethod">
              <option value="STP at Project Site">STP at Project Site</option>
              <option value="Septic Tank with Soak Well">
                Septic Tank with Soak Well
              </option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Whether recycling of treated effluent is proposed
            <select name="recyclingProposed">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
        </div>

        
      </section> */}
        <h2 class="heading1">SEWARAGE DISPOSAL</h2>
        <section className="s">
          <div class="projectdetails">
            <div class="clabels longlabels select">
              <label class="label1">
                2.15 Whether sewerage pipe line of Municipal/local authority is
                available near by the project site to which sewerage line of
                project can be connected?
              </label>
              <select name="sewaragedisposal">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div class="flex longlabels clabels">
              <label>
                (a) Quantity of sewerage which is expected to generate from the
                project as per NBC:
              </label>
              <Input label=" Residencial" type="number" />
              <Input label=" Commercial" type="number" />
              <Input label=" Total" type="text" />
            </div>

            <div class="radioinput gap">
              <label class="openlabel">
                (b)How sewerage of the project will be treated?:
              </label>
              <div class="radioflex gap">
                <input type="radio" placeholder="" name="tparea" />
                Borewell at Project Site
                <input type="radio" placeholder="" name="tparea" />
                Tankers
                <input type="radio" placeholder="" name="tparea" />
                Other
              </div>
            </div>

            <div class=" flex select">
              <label>
                (c)Whether recycling of treated effluent is proposed
              </label>
              <select name="recyclingProposed">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          {/* Add more input fields as needed */}
        </section>

        <section>
          <h2 class="heading1">SOLID WASTE DISPOSAL</h2>
          <div class="radioinput">
            <label class="openlabel">
              {" "}
              2.16 Solid Waste Disposal from the project
            </label>
            <input type="radio" placeholder="" name="tparea" />
            Local Authority
            <input type="radio" placeholder="" name="tparea" />
            Other
          </div>
        </section>
        <br></br>
        <br></br>
        <h2 class="heading3">SWIMMING POOL</h2>
        <section className="bankDetail">
          <div class="projectdetails">
            <label>
              2.17 Swimming pool capacity (For Project cost &gt; 100 crores)
              <select name="seweragePipeLine">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </label>
            <div class="labelsD">
              <Input label="Length (Mtrs)" placeholder="10" />
              <Input label="Breadth (Mtrs)" placeholder="10" />
              <Input label="Average Water Depth (Mtrs)" placeholder="10" />
              <Input label="Capacity (Litres)" placeholder="1000000.00" />
            </div>
          </div>

          {/* Add more input fields as needed */}
        </section>

        {/* Add more  sections as needed */}

        <div class="btn1">
          <button class="Nextbtn" type="submit">
            next
            {/* <Link href="/Professionals"> Next</Link> */}
          </button>
        </div>
      </div>
      {/* Add more input fields or other form elements as needed */}
    </form>
  );
};

export default Form1;
