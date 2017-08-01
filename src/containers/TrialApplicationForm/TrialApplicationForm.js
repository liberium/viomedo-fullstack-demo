import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Form, FormGroup } from 'components'

import './style.css'

const TrialApplicationForm = ({ handleSubmit }) =>
  <Form onSubmit={handleSubmit}>
    <Field
      name="firstName"
      label="First Name"
      type="text"
      component={FormGroup}
    />
    <Field
      name="lastName"
      label="Last Name"
      type="text"
      component={FormGroup}
    />
    <Field name="email" label="Email" type="text" component={FormGroup} />
    <Field name="gender" label="Gender" type="text" component={FormGroup} />
    <Field name="age" label="Age" type="text" component={FormGroup} />
    <Field name="phone" label="Phone" type="text" component={FormGroup} />
    <Field name="zip" label="Zip Code" type="text" component={FormGroup} />
    <Field
      name="termsAccepted"
      label="I accept the terms of use."
      type="checkbox"
      component={FormGroup}
    />
    <button type="submit">Submit</button>
  </Form>

export default reduxForm({
  form: 'trialApplication',
})(TrialApplicationForm)
