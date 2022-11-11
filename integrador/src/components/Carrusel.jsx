import React, { useState } from 'react'
import Botonera from './Botonera'

export default function Carrusel(props) {
  const [movimiento, setMovimiento]= useState("carrusel-grande prev");
  const [izqActivo, setIzqActivo]=useState('boton-carrusel izq');
  const [derActivo, setDerActivo]=useState('boton-carrusel der');

  const arrayBotones1=["Todos" , "Deportes", "Musical", "Accion"];
  const arrayBotones2=["Aventura" , "Rol", "Lucha", "Carreras"];

  function moverBotonera(e)
  {
    if(e.target.className == "boton-carrusel izq" || e.target.className == "boton-carrusel izq activo")
    {
      setMovimiento("carrusel-grande prev");
      setIzqActivo("boton-carrusel izq activo");
      setDerActivo("boton-carrusel der");
    }else{
      setMovimiento("carrusel-grande next");
      setDerActivo("boton-carrusel der activo");
      setIzqActivo("boton-carrusel izq");
    }
  }

  return (
    <div className='centrado'>
      <button className={izqActivo} onClick={moverBotonera}>{"<<"}</button>
      <div className='carrusel'> 
        <div className={movimiento}>
            <Botonera {...props} content={arrayBotones1}/>
            <Botonera {...props} content={arrayBotones2}/>
        </div>
      </div>
      <button className={derActivo} onClick={moverBotonera}>{">>"}</button>
    </div>

  )
}
