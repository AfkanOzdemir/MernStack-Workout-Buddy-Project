import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//Component
import { WorkoutsContextProvider } from '../context/WorkoutContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
)









