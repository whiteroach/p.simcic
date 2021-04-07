import './App.scss';
import Navbar from './Components/PortNavbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About />
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
