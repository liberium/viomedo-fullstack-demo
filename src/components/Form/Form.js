import React from 'react'

import './style.css'

const Form = ({ children, ...rest }) =>
  <form className="form" {...rest}>
    {children}
  </form>

export default Form
