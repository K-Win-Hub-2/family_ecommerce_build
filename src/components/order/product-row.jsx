import React, { useState, useEffect } from 'react';

const ProductRow = ({
  units,
  designNameFromUnits, // The design_name passed from the parent
  item_name,
  register,
  addDesign,
  addGender,
  addFabric,
  addColor,
  addSize,
  cheColor,
  changeprice,
  handleSubmit,
  addToCart
}) => {
  // Initialize state with the passed design name and empty selections for other filters
  const [selectedDesign, setSelectedDesign] = useState(designNameFromUnits || '');
  const [selectedGender, setSelectedGender] = useState('');
  const [filteredGenders, setFilteredGenders] = useState([]);
  const [filteredFabrics, setFilteredFabrics] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);

  // Extract unique design names from the units data
  const uniqueDesigns = [...new Set(units.map(unit => unit.design_name))];

  console.log('designNameFromUnits',designNameFromUnits);
  console.log('uniqueDesigns',uniqueDesigns);

// Example URL-encoded string
const encodedItemName = item_name;

// Step 1: Decode the URL-encoded string
const decodedItemName = decodeURIComponent(encodedItemName);

// Step 2: Format the decoded string
// Convert to lowercase and remove spaces
const formattedItemName = decodedItemName.toLowerCase().replace(/\s+/g, '');
console.log('formattedItemName',formattedItemName);



  useEffect(() => {
    // Update selected design if designNameFromUnits changes
    setSelectedDesign(formattedItemName || '');
  }, [formattedItemName]);

  useEffect(() => {
    // Filter genders based on the selected design
    if (selectedDesign) {
      const genders = [...new Set(units
        .filter(unit => unit.design_name === selectedDesign)
        .map(unit => unit.gender_name))];
      setFilteredGenders(genders);
      setSelectedGender(''); // Clear selected gender when design changes
    } else {
      setFilteredGenders([]);
    }
  }, [selectedDesign, units]);

  useEffect(() => {
    // Filter fabrics, colors, and sizes based on the selected design and gender
    if (selectedDesign && selectedGender) {
      const filteredUnits = units.filter(
        unit => unit.design_name === selectedDesign && unit.gender_name === selectedGender
      );
      setFilteredFabrics([...new Set(filteredUnits.map(unit => unit.fabric_name))]);
      setFilteredColors([...new Set(filteredUnits.map(unit => unit.colour_name))]);
      setFilteredSizes([...new Set(filteredUnits.map(unit => unit.size_name))]);
    } else {
      setFilteredFabrics([]);
      setFilteredColors([]);
      setFilteredSizes([]);
    }
  }, [selectedDesign, selectedGender, units]);

  return (
    <tbody id="addrow">
      <tr className="text-center">
        <td>
          <span id="item_name">{selectedDesign}</span>&nbsp;
          <span id="gen_name">{selectedGender}</span>&nbsp;
          <span id="fab_name"></span>&nbsp;
          <span id="col_name"></span>&nbsp;
          <span id="siz_name"></span>
        </td>
        <td>
          <label className="px-2">Design</label>
          <select
            {...register("design_id")}
            id="item_name"
            value={selectedDesign} // Set the initial selected value
            onChange={(e) => {
              const designName = e.target.value;
              setSelectedDesign(designName); // Update selected design
              addDesign(designName); // Call the addDesign function with the selected design
            }}
          >
            <option value="">Select Design</option>
            {uniqueDesigns.map((design, index) => (
              <option key={index} value={design}>
                {design}
              </option>
            ))}
          </select>
          &nbsp;&nbsp;&nbsp;
          <br /><br />
          <label className="px-2">Gender</label>
          <select
            {...register("gender_id")}
            id="gen_name"
            value={selectedGender} // Set the initial selected value
            onChange={(e) => {
              const gender = e.target.value;
              setSelectedGender(gender); // Update selected gender
              addGender(gender); // Call the addGender function with the selected gender
            }}
          >
            <option value="">Select Gender</option>
            {filteredGenders.map((gender, index) => (
              <option key={index} value={gender}>
                {gender === 'f' ? 'Female' : gender === 'm' ? 'Male' : gender}
              </option>
            ))}
          </select>
          &nbsp;&nbsp;&nbsp;
          <br /><br />
          <label className="px-2">Fabric</label>
          <select
            {...register("fabric_id")}
            id="fab_name"
            onChange={(e) => addFabric(e.target.value)} // Call addFabric on change
          >
            <option value="">Select Fabric</option>
            {filteredFabrics.map((fabric, index) => (
              <option key={index} value={fabric}>
                {fabric}
              </option>
            ))}
          </select>
          &nbsp;&nbsp;&nbsp;
          <br /><br />
          <label className="px-2" style={{ marginLeft: "55px" }}>Color</label>
          <select
            {...register("colour_id")}
            id="col_name"
            onChange={(e) => addColor(e.target.value)} // Call addColor on change
          >
            <option value="">Select Color</option>
            {filteredColors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
          &nbsp;&nbsp;&nbsp;
          <button onClick={cheColor} style={{ display: "inline-block" }}>Check</button>
          <br /><br />
          <label className="px-2">Size</label>
          <select
            {...register("size_id")}
            id="siz_name"
            onChange={(e) => addSize(e.target.value)} // Call addSize on change
          >
            <option value="">Select Size</option>
            {filteredSizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
          &nbsp;&nbsp;&nbsp;
          <br /><br />
        </td>
        <td>
          <input
            id="qty"
            {...register('quantity')}
            placeholder="0"
            onKeyUp={changeprice} // Call changeprice on key up
          />
        </td>
        <td>
          <input
            id="price"
            {...register('price')}
            placeholder="0"
            disabled
          />
        </td>
        <td>
          <button onClick={handleSubmit((data) => addToCart(data))}>ADD</button>
        </td>
        <td></td>
      </tr>
    </tbody>
  );
};

export default ProductRow;
