import React from 'react'

import './Checkbox.css'

const Checkbox = ({ label, ...inputProps }) =>
  <div className="Checkbox">
    <label>
      <input {...inputProps} />
      {label}
    </label>
  </div>

export default Checkbox
