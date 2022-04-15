import React from 'react'
import {StrictMode} from 'react'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import Footer from './components/footer/Footer'
import * as ReactDOMClient from 'react-dom/client'
const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
