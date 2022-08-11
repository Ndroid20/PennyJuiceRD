import { Juice } from './Components/Juice';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <About />

      <Footer />
    </div>
  );
}

export default App;
