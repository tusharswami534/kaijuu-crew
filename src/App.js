import './App.css';
import NavBar from './components/common/NavBar';
import About from './components/home/About';
import Hero from './components/home/Hero';
import RoadMap from './components/home/RoadMap';
import TeamSlider from './components/home/TeamSlider';


function App() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <About/>
        <RoadMap/>
        <TeamSlider/>
    </div>
  );
}

export default App;
