import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <NavLink to="/">
                    <div>Logo</div>
                </NavLink>
                <div className='flex flex-row items-center'>
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <p><FaShoppingCart /></p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar