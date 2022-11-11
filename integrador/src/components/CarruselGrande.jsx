import React, { useState } from 'react'

export default function CarruselGrande() {
    const [movimiento, setMovimiento]= useState("carrusel-view prev");
    function moverImg(e)
    {
      if(e.target.className == "boton-carrusel-grande izq" || e.target.className == "boton-carrusel-grande izq")
      {
        setMovimiento("carrusel-view prev");
      }else{
        setMovimiento("carrusel-view next");
      }
    }

  return (
    <div className='centrado'>
    <button className="boton-carrusel-grande izq"  onClick={moverImg} >{"<"}</button>

    <div className='carrusel-grandote'> 
      <div className={movimiento}>
        <img src="../images/pal carrusel.jpg" alt="img1" className='carrusel-view-img'/>
        <img src="../images/pal carrusel2.jpg" alt="img2" className='carrusel-view-img'/>
      </div>
    </div>

    <button className="boton-carrusel-grande der" onClick={moverImg}>{">"}</button>
  </div>
  )
}
