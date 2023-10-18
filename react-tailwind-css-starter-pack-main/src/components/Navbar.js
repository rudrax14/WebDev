import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
function Navbar({ isLoggedIn, setIsLoggedIn }) {


    return (
        <div className='flex justify-around m-auto max-w-[1160px] py-4'>

            <div>
                <Link to="/">
                    <h1>Study-Notion</h1>
                </Link>

            </div>
            <div >
                <ul className='flex gap-x-4'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex gap-x-4'>
                {!isLoggedIn && (<Link to='/login'>
                    <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-800'>Login</button>
                </Link>)
                }
                {!isLoggedIn && (<Link to='/signup'>
                    <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-800'>Sign Up</button>
                </Link>)
                }
                {isLoggedIn && (<Link to='/Dashboard'>
                    <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-800'>Dashboard</button>
                </Link>)
                }
                {isLoggedIn && (<Link to='/'>
                    <button className=' bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-800' onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logout Sucessfully");
                    }}>Logout</button>
                </Link>)
                }
            </div>
        </div>
    )
}

export default Navbar