import React from 'react'
import { useContext } from 'react/cjs/react.production.min'
import AppContextProvider, { AppContext } from './context/AppContext'

function Page2() {
    const { app2 } = useContext(AppContext)
    return (
        <div>

            <div>page2</div>
            <div>{app2}</div>
        </div>
    )
}

export default Page2