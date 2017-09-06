import React from 'react'

import './Input.css'

const Input = ({ required, label, errorMsg, ...inputProps }) =>
  <div className="Input">
    <label className={required ? 'required' : null}>
      {label}
      <span className="asterisk">*</span>
      <span className="error-message">
        {errorMsg && errorMsg}
      </span>
      <input {...inputProps} className={errorMsg ? 'has-error' : null} />
    </label>
  </div>

export default Input
