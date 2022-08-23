import React, { useState } from 'react'

function Test() {
  const [allValues, setAllValues] = useState({
    mobile: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
 });
 const changeHandler = e => {
  setAllValues({...allValues, [e.target.name]: e.target.value})
  console.log(allValues);
}

  return (
    <div>
      <input type="text"
       className="form-control"
       id="mobile"
       name="mobile"
       placeholder="Enter a valid mobile number"
       onChange={changeHandler}
   />
      <input type="text"
       className="form-control"
       id="username"
       name="username"
       placeholder="Enter a valid Name"
       onChange={changeHandler}
   />
    </div>
  )
}

export default Test