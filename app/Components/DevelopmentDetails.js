import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { PrismaClient } from "@prisma/client";
import Link from "next/link";
const prisma = new PrismaClient();

const Input = ({ label, placeholder, type = "text", onChange }) => (
  <div class="Input">
    <label class="labels1">{label}</label>
    <input
      class="maininput"
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Form1 = () => {
  const router = useRouter();
  const [Type_of_inventory, setType_of_inventory] = useState("");
  const [No_of_inventory, setNo_of_inventory] = useState(0);
  const [Carpet_area, setCarpet_area] = useState(0);
  const [Area_balcony, setArea_balcony] = useState(0);
  const [Area_terrace, setArea_terrace] = useState(0);
  const [No_inventory_booked, setNo_inventory_booked] = useState(0);
  const [Road_system, setRoad_system] = useState("");
  const [Water_supply, setWater_supply] = useState("");
  const [Drainage_system, setDrainage_system] = useState("");
  const [Electricity_supply, setElectricity_supply] = useState("");
  const [Waste_management, setWaste_management] = useState("");
  const [drinking_water_from_local, setdrinking_water_from_local] =
    useState("Yes");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = {
        Type_of_inventory,
        No_of_inventory: parseInt(No_of_inventory),
        Carpet_area: parseInt(Carpet_area),
        Area_balcony: parseInt(Area_balcony),
        Area_terrace: parseInt(Area_terrace),
        No_inventory_booked: parseInt(No_inventory_booked),
        Road_system,
        Water_supply,
        Drainage_system,
        Electricity_supply,
        Waste_management,
        drinking_water_from_local,
      };
      console.log(body);
      fetch("/api/post", {
        method: "POST",
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
            type="number"
          />
          <Input
            name="Carpet_area"
            value={Carpet_area}
            onChange={setCarpet_area}
            label="2.3 Carpet Area (Sq Mtrs)*"
            placeholder="6433.09"
            type="number"
          />
        </div>
        {/* <div class='bigdiv' >
            <Input label="1.4 Explanatory Note by Promoter (Reasons)*" placeholder="Guidance on Scenario (Circular 8 - PDF)" />
          </div> */}
        <div class="labels">
          <Input
            name="Area_balcony"
            value={Area_balcony}
            onChange={setArea_balcony}
            label="2.4 Area of exclusive balcony/verandah (Sq Mtr)*"
            placeholder="0"
            type="number"
          />
          <Input
            label="2.5 Area of exclusive open terrace if any (Sq Mtr)*"
            placeholder="0"
            name="Area_terrace"
            value={Area_terrace}
            onChange={setArea_terrace}
          />
          <Input
            label="2.6 No. of Inventory Booked*"
            placeholder="0"
            name="No_inventory_booked"
            value={No_inventory_booked}
            onChange={setNo_inventory_booked}
          />
        </div>
      </div>

      <h2 class="heading2">INTERNAL DEVELOPMENT WORK</h2>
      <div id="head2div">
        <div class="labels">
          <Input
            label="2.7 Road System"
            placeholder="Self Development"
            name="Road_system"
            value={Road_system}
            onChange={setRoad_system}
          />
          <Input
            label="2.8 Water Supply"
            placeholder="Self Development"
            name="Water_supply"
            value={Water_supply}
            onChange={setWater_supply}
          />
          <Input
            label="2.9 Sewage and Drainage System"
            placeholder="Self Development"
            name="Drainage_system"
            value={Drainage_system}
            onChange={setDrainage_system}
          />
        </div>
        <div class="labels">
          <Input
            label="2.10 Electricity Supply Transformer And Sub Station"
            placeholder="Self Development"
            name="Electricity_supply"
            value={Electricity_supply}
            onChange={setElectricity_supply}
          />
          <Input
            label="2.11 Solid Waste Management And Disposal*"
            placeholder="Self Development"
            name="Waste_management"
            value={Waste_management}
            onChange={setWaste_management}
          />
        </div>
      </div>
      <div>
        <section>
          <h2 class="heading1">OTHER INTERNAL DEVELOPMENT WORK</h2>
          <h2 class="heading1">WATER SUPPLY</h2>
          <div class="projectdetails">
            <div class="longlabels clabels select">
              <label>
                2.14 Whether Drinking Water is to be obtained from
                Municipal/Local Authority Pipe Line
              </label>
              <select
                class="yesnoinput"
                name="drinking_water_from_local"
                value={drinking_water_from_local}
                onChange={setdrinking_water_from_local}
              >
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
