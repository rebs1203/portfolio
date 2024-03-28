import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import HomeBanner from './components/HomeBanner.js'
import About from './components/About.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <NavBar />
              <HomeBanner />
            </>
            }/>
            <Route path='/About' element={
              <>
                <NavBar />
                <About />
                <Footer />
              </>
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
