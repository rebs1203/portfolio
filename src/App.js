import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  const [iconNav, setIconNav] = useState('home')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Home iconNav={iconNav}/>
            </>
            }/>
            <Route path='/About' element={
              <>
                <About/>
              </>
            }/>
            <Route path='/Portfolio' element={
              <>
                <Portfolio/>
              </>
            }/>
            <Route path='/Contact' element={
              <>
                <Contact/>
              </>
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
