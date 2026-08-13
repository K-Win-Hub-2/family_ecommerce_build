const FilterSizeWithUnitId = ({units, onChange}) => {
    return (
        <div>
            <select onChange={(e) => onChange(e.target.value)} id="color" className="ml-2 p-2" disabled={units.length === 0}>
              <option value="">{units.length === 0 ? 'No Size Available' : 'Choose Size'}</option>
              {units.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
        </div>
    )
}

export default FilterSizeWithUnitId;