
// import { Juice } from './Components/Juice';

import  Juice  from './Components/Juice';

import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ImageSlider from './Components/ImageSlider';
// import { SliderData } from './Components/SliderData';
// import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/Home' exact="true" element={<Home />} />
        {/* <Route path='/Shop' exact="true" element={<Juice />} /> */}
        <Route path='/Contact' exact="true" element={<Contact />} />
        <Route path='/About' exact="true" element={<About />} />
      </Routes>
      {/* <Home /> */}
      {/* <ImageSlider slide={SliderData} /> */}
      {/* <About /> */}


      <About />
      <Juice />

      <Footer />
    </div >
  );
}

export default App;
