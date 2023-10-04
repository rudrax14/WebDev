import "./App.css";
import React, { useState } from "react";
function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  console.log(formData)
  const changeHandeler = (event) => {
    // console.log(event.target.value)
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }


  return (
    <div className="flex justify-center flex-col items-center">
      <h1>FORM</h1>
      <input type="text" placeholder="First Name" name="firstName" className="border-2 border-black" onChange={changeHandeler} />
      <br />
      <input type="text" placeholder="Last Name" name="lastName" className="border-2 border-black" onChange={changeHandeler} />
      <br />
      <input type="email" placeholder="Email" name="email" className="border-2 border-black" onChange={changeHandeler} />
    </div>
  );
}

export default App;
