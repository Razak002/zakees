import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About '
import App from './App'
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      
      </Routes>
    </Router>,

  </React.StrictMode>
)
