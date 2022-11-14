import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style/style.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brand from './components/Brand';
import Filtrado from './components/Filtrado';
import Home from './pages/Home';
import Merch from './pages/Merch';
import Anime from './pages/Anime';
import Footer from './components/Footer';

function App() {
  return (
    <div className='p-relative'>
    
    <Brand/>
    <Filtrado/>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/anime" element={<Anime/>} />
          <Route path='/merch' element={<Merch/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
