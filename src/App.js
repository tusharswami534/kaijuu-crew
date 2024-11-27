import './App.css';
import NavBar from './components/common/NavBar';
import About from './components/home/About';
import Faq from './components/home/Faq';
import Hero from './components/home/Hero';
import KaijuuCrewClasses from './components/home/KaijuuCrewClasses';
import RoadMap from './components/home/RoadMap';
import TeamSlider from './components/home/TeamSlider';
import Traits from './components/home/Traits';


function App() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <About/>
        <KaijuuCrewClasses/>
        <Traits/>
        <RoadMap/>
        <TeamSlider/>
        <Faq/>
    </div>
  );
}

export default App;
