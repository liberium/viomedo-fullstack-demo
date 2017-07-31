import React from 'react'

const TrialApplicationForm = () =>
  <form>
    <input className="firstName" type="text" />
    <input className="lastName" type="text" />
    <input className="email" type="text" />
    <input className="gender" type="text" />
    <input className="age" type="text" />
    <input className="phone" type="text" />
    <input className="zip" type="text" />
    <input className="termsAccepted" type="checkbox" />
    <input type="submit" value="Submit" />
  </form>

export default TrialApplicationForm