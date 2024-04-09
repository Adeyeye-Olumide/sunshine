import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header-component/headerComponent';
import IntroComponent from './components/intro-component/IntroComponent';
import TogetherComponent from './components/together-component/TogetherComponent';
import InvolveComponent from './components/involvement-component/InvolveComponent';
import CarouselComponent from './components/carousel-component/CarouselComponent';
import MissionComponent from './components/mission-component/MissionComponent';

import ConclusionComponent from './components/conclusion-component/ConclusionComponent';

import FooterComponent from './components/footer-component/FooterComponent';


function App() {
  return (
    <div className="App">
     <HeaderComponent></HeaderComponent>
     <IntroComponent></IntroComponent>
     <MissionComponent></MissionComponent>
     <InvolveComponent></InvolveComponent>
     <CarouselComponent></CarouselComponent>
     <ConclusionComponent></ConclusionComponent>
    <TogetherComponent></TogetherComponent>
    <FooterComponent></FooterComponent>

     
    
     
    </div>
  );
}

export default App;
