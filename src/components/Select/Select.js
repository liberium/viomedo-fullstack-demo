import React from 'react'

const Select = ({ required, label, options, ...inputProps }) =>
  <div className="Select">
    <label className={required ? 'required' : null}>
      {label}
      <select>
        {options.map(opt =>
          <option name={opt.name}>
            {opt.label}
          </option>
        )}
      </select>
    </label>
  </div>

export default Select
