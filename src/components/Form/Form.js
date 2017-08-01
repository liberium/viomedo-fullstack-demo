import React from 'react'

import './style.sass'

const Form = ({ children, ...rest }) =>
  <form className="form" {...rest}>
    {children}
  </form>

export default Form
