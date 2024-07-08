const FilterSizeWithUnitId = ({units, onChange}) => {
    return (
        <div>
            <select onChange={(e) => onChange(e.target.value)} id="color" className="ml-2 p-1">
              <option value="">Choose Size</option>
              {units.map((color) => (
                <option key={color.id} value={color.size_name}>
                  {color.size_name}
                </option>
              ))}
            </select>
        </div>
    )
}

export default FilterSizeWithUnitId;