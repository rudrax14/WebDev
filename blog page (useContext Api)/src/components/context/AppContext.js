import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {

    const app = 'react'
    const app2 = 'react2'

    const value = {
        app,
        app2
    };


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;
