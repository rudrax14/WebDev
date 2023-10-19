import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const [accountType, setAccountType] = useState('student');

  function changeHandler(e) {
    const { value, name } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    // Extract email and password values from the formData object
    const { email, password, fname, lname, cpassword } = formData;

    if (password !== cpassword) {
      toast.error('Not Same Password');
    }
    else if (!fname || !lname || !email) {
      toast.error("Enter Details");
    } else {
      setIsLoggedIn(true);
      toast.success('Signup Success');
      navigate('/dashboard');
      const accountData = {
        ...formData,
        accountType,
      };
      console.log(accountData);
    }
  }

  return (
    <div>
      <div className="flex bg-gray-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType('student')}
          className={`${accountType === 'student'
            ? 'bg-gray-900 text-gray-50'
            : 'bg-transparent text-gray-200'
            } py-2 px-5 rounded-full transition-all hover:bg-gray-900 hover:text-gray-50`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType('instructor')}
          className={`${accountType === 'instructor'
            ? 'bg-gray-900 text-gray-50'
            : 'bg-transparent text-gray-200'
            } py-2 px-5 rounded-full transition-all hover:bg-gray-900 hover:text-gray-50`}
        >
          Instructor
        </button>
      </div>

      <form action="" className="flex flex-col w-44" onSubmit={submitHandler}>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" value={formData.fname} onChange={changeHandler} className="bg-gray-600" />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" value={formData.lname} onChange={changeHandler} className="bg-gray-600" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={changeHandler} className="bg-gray-600" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={changeHandler} className="bg-gray-600" />
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" name="cpassword" value={formData.cpassword} onChange={changeHandler} className="bg-gray-600" />
        <button className="bg-yellow-200 text-black mt-4">Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
