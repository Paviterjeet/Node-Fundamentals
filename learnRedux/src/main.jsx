import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import {Provider} from '@reduxjs/toolkit'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>,
)
