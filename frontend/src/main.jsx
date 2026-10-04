import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/index.css'
import App from './app/App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

// Mounts the React app and provides the Redux store to all components.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
    
  </StrictMode>,
)
