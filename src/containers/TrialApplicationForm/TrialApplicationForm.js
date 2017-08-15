import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Form, FormGroup } from 'components'

import './TrialApplicationForm.css'

const TrialApplicationForm = ({ handleSubmit }) =>
  <Form id="trial-application-form" onSubmit={handleSubmit}>
    <Field
      name="firstName"
      label="First Name"
      id="first_name"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="lastName"
      label="Last Name"
      id="last_name"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="email"
      label="Email"
      id="email"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="gender"
      label="Gender"
      id="gender"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="age"
      label="Age"
      id="age"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="phone"
      label="Phone"
      id="phone"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="zip"
      label="Zip Code"
      id="zip"
      type="text"
      required
      component={FormGroup}
    />
    <Field
      name="termsAccepted"
      label="I accept the terms of use."
      id="terms_accepted"
      type="checkbox"
      component={FormGroup}
    />
    <button type="submit">Submit</button>
  </Form>

export default reduxForm({
  form: 'trialApplication',
})(TrialApplicationForm)
