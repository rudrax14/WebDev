import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Page2 from './Page2'
function Page1() {
    const { app } = useContext(AppContext)
    return (
        <div className=' text-yellow-400'>

            <div>page1</div>
            <div >{app}</div>
            <Page2 />
        </div>

    )
}

export default Page1