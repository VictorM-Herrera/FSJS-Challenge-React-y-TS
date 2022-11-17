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
import Faqpage from './pages/Faqpage';
import HomeNoFaq from './pages/HomeNoFaq';
import Carrito from './components/Carrito';
import { CartProvider } from 'react-use-cart';
import Detalles from './pages/Detalles';

function App() {
  return (
    <div className='p-relative'>
      <CartProvider>
        <Brand/>
        <Filtrado/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/anime" element={<Anime fil="nada"/>} />
              <Route path='/merch' element={<Merch fil="nada"/>}/>
              <Route path='/faq' element={<Faqpage/>}/>
              <Route path='/home/:filtrado' element={<HomeNoFaq/>}/>
              <Route path='/cart' element={<Carrito/>}/>
              <Route path='/details/:id' element={<Detalles/>}/>
            </Routes>
          </BrowserRouter>
          <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
