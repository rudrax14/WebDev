import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
function LoginForm({ setIsLoggedIn }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [showPassword, setShowPassword] = useState(false)


    function changeHander(e) {
        const { value, name } = e.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }


    function submitHandler(e) {
        e.preventDefault();

        // Extract email and password values from the formData object
        const { email, password } = formData;

        if (!email || !password) {
            toast.error("Enter Details");
        } else {
            setIsLoggedIn(true);
            toast.success("Login Success");
            navigate("/dashboard");
            console.log("Login Data");
            console.log(formData);
        }
    }


    return (
        <div>
            <form action="" className='flex flex-col' onSubmit={submitHandler}>
                <label htmlFor="">
                    Email Address
                </label>
                <input type="email" placeholder='Enter Your Email' className=' w-48'
                    name='email'
                    value={formData.email}
                    onChange={changeHander} />
                <label htmlFor="">
                    Password
                </label>
                <input type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Your Password' className=' w-48 bg-gray-600'
                    name='password'
                    value={formData.password}
                    onChange={changeHander} />
                <span onClick={() => setShowPassword(!showPassword)} className=' cursor-pointer'>Show PWD</span>

                <button className=" w-32 bg-gray-400">Sign in</button>
            </form>
        </div>
    )
}

export default LoginForm