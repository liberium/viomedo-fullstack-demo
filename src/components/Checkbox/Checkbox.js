import React from 'react'

const Checkbox = ({ label, ...inputProps }) =>
  <div className="Checkbox">
    <label>
      {label}
      <input {...inputProps} />
    </label>
  </div>

export default Checkbox
