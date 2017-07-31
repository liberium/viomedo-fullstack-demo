import React from 'react'
import { Field, reduxForm } from 'redux-form'

const TrialApplicationForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <Field name="firstName" component="input" type="text" />
    <Field name="lastName" component="input" type="text" />
    <Field name="email" component="input" type="text" />
    <Field name="gender" component="input" type="text" />
    <Field name="age" component="input" type="text" />
    <Field name="phone" component="input" type="text" />
    <Field name="zip" component="input" type="text" />
    <Field name="termsAccepted" component="input" type="checkbox" />
    <button type="submit">Submit</button>
  </form>

export default reduxForm({
  form: 'trialApplication',
})(TrialApplicationForm)
