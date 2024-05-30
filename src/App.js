import { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  const [iconNav, setIconNav] = useState('home')


  const mediaQuery = window.innerWidth <= 600




  console.log(mediaQuery)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Home iconNav={iconNav} mediaQuery={mediaQuery}/>
            </>
            }/>
            <Route path='/About' element={
              <>
                <About mediaQuery={mediaQuery}/>
              </>
            }/>
            <Route path='/Portfolio' element={
              <>
                <Portfolio mediaQuery={mediaQuery}/>
              </>
            }/>
            <Route path='/Contact' element={
              <>
                <Contact mediaQuery={mediaQuery}/>
              </>
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
