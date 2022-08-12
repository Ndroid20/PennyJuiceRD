
// import { Juice } from './Components/Juice';
import  Juice  from './Components/Juice';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Router } from 'react-router';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';




function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path='/Home' exact="true" element={<Home />} />
        <Route path='/Shop' exact="true" element={<Juice />} />
        <Route path='/Contact' exact="true" element={<Contact />} />
        <Route path='/About' exact="true" element={<About />} /> 
      </Routes>
      <Footer />
      {/* <Home /> */}
      {/* <ImageSlider slide={SliderData} /> */}
      {/* <About /> */}


     
    </div >
  );
}

export default App;
