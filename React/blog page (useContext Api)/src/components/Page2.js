import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

function Page2() {
    const { app2 } = useContext(AppContext)
    return (
        <div className=' text-lime-500'>

            <div>page2</div>
            <div>{app2}</div>
        </div>
    )
}

export default Page2