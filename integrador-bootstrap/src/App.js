import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style/style.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brand from './components/Brand';
import Filtrado from './components/Filtrado';
import Carrusel from './components/Carrusel';
import Anime from './pages/Anime';

function App() {
  return (
    <>
    <Brand/>
    <Filtrado/>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Anime/>} />
          <Route path="/general" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
