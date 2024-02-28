import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' // importing Provider from react-redux
import { store } from './redux/Store.jsx' // importing store from redux

ReactDOM.createRoot(document.getElementById('root')).render(
  // wrapping the App component with Provider to provide the store to the App component
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>
)
