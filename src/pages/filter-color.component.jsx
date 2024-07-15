// const FilterColorWithUnitId = ({units, onChange}) => {
//   console.log('units', units);
//     return (
//         <select onChange={(e) => onChange(e.target.value)} id="color" className="ml-2 p-1">
//           <option value="">Choose Color</option>
//           {units.map((color) => (
//             <option key={color.id} value={color.colour_photo_path}>
//               {color.colour_name}
//             </option>
//           ))}
//         </select>
//       );
// }

// export default FilterColorWithUnitId;

const FilterColorWithUnitId = ({units, onChange}) => {
  console.log('units', units);

  // Use a Set to store unique colors
  const uniqueColors = new Set();
  const filteredUnits = units.filter(unit => {
    if (uniqueColors.has(unit.colour_name)) {
      return false;
    } else {
      uniqueColors.add(unit.colour_name);
      return true;
    }
  });

  return (
    <select onChange={(e) => onChange(e.target.value)} id="color" className="ml-2 p-1">
      <option value="">Choose Color</option>
      {filteredUnits.map((color) => (
        <option key={color.id} value={color.colour_photo_path}>
          {color.colour_name}
        </option>
      ))}
    </select>
  );
}

export default FilterColorWithUnitId;
