import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import SegundoComponente from './components/SegundoComponente';

const myFirstElement = <h1> Hola JSX</h1>//creo un elemento


function App() {
  return (
    <>
    {myFirstElement}
    <PrimerComponente />
    <SegundoComponente/>
    </>
  );
}

export default App;
