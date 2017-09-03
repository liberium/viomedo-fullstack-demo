import React from 'react'

const Input = ({ required, label, ...inputProps }) =>
  <div className="Input">
    <label className={required ? 'required' : null}>
      {label}
      <input {...inputProps} />
    </label>
  </div>

export default Input
