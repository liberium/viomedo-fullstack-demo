import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate as isEmail } from 'email-validator'

import { Form, FormGroup } from 'components'

import './TrialApplicationForm.css'

const TrialApplicationForm = ({ handleSubmit }) =>
  <Form id="trial-application-form" onSubmit={handleSubmit}>
    <Field
      name="firstName"
      label="First Name"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="lastName"
      label="Last Name"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="email"
      label="Email"
      type="email"
      required
      component={FormGroup}
    />
    <Field
      name="gender"
      label="Gender"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="age"
      label="Age"
      type="number"
      required
      component={FormGroup}
    />
    <Field
      name="phone"
      label="Phone"
      type="tel"
      required
      component={FormGroup}
    />
    <Field
      name="zip"
      label="Zip Code"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="termsAccepted"
      label="I accept the terms of use."
      type="checkbox"
      component={FormGroup}
    />
    <button type="submit">Submit</button>
  </Form>

const validate = values => {
  const errors = {}

  if (!values.firstName) errors.firstName = 'Required'

  if (!values.lastName) errors.lastName = 'Required'

  if (!values.email) errors.email = 'Required'
  else if (!isEmail(values.email)) errors.email = 'Invalid format'

  if (!values.gender) errors.gender = 'Required'

  if (!values.age) errors.age = 'Required'
  else if (isNaN(Number(values.age))) errors.age = 'Should be a number'
  else if (Number(values.age) < 1 || Number(values.age) > 99)
    errors.age = 'Invalid format'

  if (!values.phone) errors.phone = 'Required'

  if (!values.zip) errors.zip = 'Required'
  else if (!/\d{3,5}/.test(values.zip)) errors.zip = 'Invalid format'

  if (!values.termsAccepted) errors.termsAccepted = 'Accept the terms'

  return errors
}

export default reduxForm({
  form: 'trialApplication',
  validate,
})(TrialApplicationForm)
