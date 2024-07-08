const FilterColorWithUnitId = ({units, onChange}) => {
    return (
        <select onChange={(e) => onChange(e.target.value)} id="color" className="ml-2 p-1">
          <option value="">Choose Color</option>
          {units.map((color) => (
            <option key={color.id} value={color.colour_name}>
              {color.colour_name}
            </option>
          ))}
        </select>
      );
}

export default FilterColorWithUnitId;