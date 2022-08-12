import { Juice } from './components/Juice';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Home from './Pages/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ImageSlider slide={SliderData} />
      <About />
      <Juice />
      <Footer />
    </div>
  );
}

export default App;
