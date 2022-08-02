import React from 'react'
import ReactDOM from 'react-dom/client'
import Join from './Components/Join/Join'
import Header from './Components/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Join />
  </React.StrictMode>
)
