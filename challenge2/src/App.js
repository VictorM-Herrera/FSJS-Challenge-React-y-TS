import './App.css';
import  {Auto, Auto2, Componente} from "./components/Auto"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Auto/>
        <Auto2/>
        <Componente color="Rojo"/>
      </header>
    </div>
  );
}

export default App;
