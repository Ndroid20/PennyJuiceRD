import { Juice } from './Components/Juice';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';

import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ImageSlider slide={SliderData} />
      <About />

      <Footer />
    </div>
  );
}

export default App;
