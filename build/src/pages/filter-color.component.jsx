import React from 'react';

const FilterColorWithUnitId = ({ units, onChange }) => {
  console.log('FilterColorWithUnitId', units);

  // Use a Set to store unique colors
  const uniqueColors = new Set();
  const filteredUnits = Array.isArray(units) ? units.filter(unit => {
    if (uniqueColors.has(unit.colour_name)) {
      return false;
    } else {
      uniqueColors.add(unit.colour_name);
      return true;
    }
  }) : [];

  console.log('filteredUnits', filteredUnits);

  return (
    <select onChange={(e) => onChange(e.target.value)} id="color" className="ml-2 p-1" disabled={filteredUnits.length === 0}>
      <option value="">{filteredUnits.length === 0 ? 'No Colors Available' : 'Choose Color'}</option>
      {filteredUnits.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
}

export default FilterColorWithUnitId;
