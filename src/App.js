import './App.scss';
import Navbar from './Components/PortNavbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {DesignContext, DesignProvider} from './Context/Context'
function App() {
 
  
  return (
    <DesignProvider>

    <div className="App" >
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </div>

    </DesignProvider>
  );
}

export default App;
