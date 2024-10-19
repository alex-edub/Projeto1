import logo from './logo.svg';
import './App.css';
import nome from './nome.js';
import HelloWorld from './Components/HelloWorld.js';

function App() {
  const name= "Matheus"

  const newName= name.toUpperCase()

  function sum (a,b){
  return a+b
  }
  const url = 'https://via.placeholder.com/150'
  return (
    
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld/>
    </div>
  )
}

export default App;
