import './App.css';
import NavBar from './components/common/NavBar';
import About from './components/home/About';
import Hero from './components/home/Hero';
import RoadMap from './components/home/RoadMap';
import Text from './components/home/Text';


function App() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <About/>
        <RoadMap/>
        <Text/>
    </div>
  );
}

export default App;
