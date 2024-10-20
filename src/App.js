import logo from './logo.svg';
import './App.css';
import nome from './nome.js';
import HelloWorld from './Components/HelloWorld.js';
import SayMyName from './Components/SayMyName.js';

function App() {
  return (
    
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Matheus"/>
    </div>
  )
}

export default App;
