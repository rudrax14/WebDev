import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
function Template({ title, description1, description2, formType, setIsLoggedIn }) {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>{description1}</p>
                <p>{description2}</p>
            </div>
            {formType === 'login' ? (<LoginForm setIsLoggedIn={setIsLoggedIn} />) : (<SignupForm setIsLoggedIn={setIsLoggedIn} />)}
        </div>
    )
}

export default Template