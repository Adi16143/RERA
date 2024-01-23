import React, { useState } from "react";

const WaterSupplyForm = () => {
  const calculateTotal = () => {
    setTotal(Number(residential) + Number(commercial));
  };

  return (
    <form>
      <label>
        Total quantity of drinking water required for the project as per NBC:
        <input
          type="number"
          value={residential}
          onChange={(e) => setResidential(e.target.value)}
        />
        (Residential)
        <input
          type="number"
          value={commercial}
          onChange={(e) => setCommercial(e.target.value)}
        />
        (Commercial)
      </label>
      <button type="button" onClick={calculateTotal}>
        Calculate Total
      </button>
      <input type="text" value={total} readOnly />

      <label>
        Water to be supplied from:
        <select
          value={waterSource}
          onChange={(e) => setWaterSource(e.target.value)}
        >
          <option value="borewell">Borewell at Project Site</option>
          <option value="tankers">Tankers</option>
          <option value="other">Other</option>
        </select>
      </label>

      {/* Add other input fields and buttons as needed */}
    </form>
  );
};

export default WaterSupplyForm;
