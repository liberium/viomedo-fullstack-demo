import React from 'react'

import './FormGroup.css'

const FormGroup = ({ input, label, id, required, type }) =>
  <p className="form-group">
    {type === 'checkbox'
      ? <label htmlFor={id} className="for-checkbox">
          {label}
        </label>
      : <label htmlFor={id} className={required ? 'required' : null}>
          {label}
        </label>}
    <input {...input} id={id} type={type} />
  </p>

export default FormGroup
