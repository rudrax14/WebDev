import React from 'react'
import Template from '../components/Template'
function Login({ setIsLoggedIn }) {
    return (
        <div>
            <Template
                title="Welcome Back"
                description1="Build skills for today, tomorrow, and beyond."
                description2="Education to future-proof your career."
                // image={loginImg}
                formType="login"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Login