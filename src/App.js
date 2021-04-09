import './App.scss';
import PageContainer from './Components/PageContainer'
import {DesignProvider} from './Context/Context'
function App() {
 
  return (
    
    <div className="App" >
      <DesignProvider>
        <PageContainer/>
      </DesignProvider>
    </div>

  );
}

export default App;
