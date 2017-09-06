import React from 'react'

import { Input, Checkbox, Select } from 'components'

import './FormGroup.css'

const FormGroup = ({ type, input, meta: { touched, error }, ...rest }) => {
  let inputElement
  const inputProps = { type, ...input, ...rest }

  if (touched && error) inputProps.errorMsg = error

  switch (type) {
    case 'checkbox':
      inputElement = <Checkbox {...inputProps} />
      break
    case 'select':
      inputElement = <Select {...inputProps} />
      break
    case 'text':
    case 'number':
    case 'email':
    case 'tel':
      inputElement = <Input {...inputProps} />
      break
    default:
      throw new Error(`Unknown input type '${type}'`)
  }

  return (
    <p className="form-group">
      {inputElement}
    </p>
  )
}

export default FormGroup
