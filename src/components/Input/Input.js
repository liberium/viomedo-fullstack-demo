import React from 'react'

const Input = ({ required, label, ...inputProps }) =>
  <label className={required ? 'input required' : 'input'}>
    {label}
    <input {...inputProps} />
  </label>

export default Input
