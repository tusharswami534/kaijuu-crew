import './App.css';
import NavBar from './components/common/NavBar';
import About from './components/home/About';
import Hero from './components/home/Hero';
import RoadMap from './components/home/RoadMap';


function App() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <About/>
        <RoadMap/>
    </div>
  );
}

export default App;
