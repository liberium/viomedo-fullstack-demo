import React from 'react'

const FormGroup = ({ input, label, type }) =>
  <div>
    <label>
      {label}
      <input {...input} type={type} />
    </label>
  </div>

export default FormGroup
