import React, { useState } from 'react'
import arrayProductos from '../Data/Data'
import Botonera from './Botonera';
import Carrusel from './Carrusel';
import Productos from './Productos';

export default function Filtrado() {
    const [view, setView]= useState("Todos");
    
    let render;
    
    switch(view)
    {
        case "Todos":
            render=<Productos tipo="Todos"/>
        break;
        case "Deportes":
            render=<Productos tipo="Deportes"/>
        break;
        case "Musical":
            render=<Productos tipo="Musical"/>
        break;
        case "Accion":
            render=<Productos tipo="Accion"/>
        break;
        case "Aventura":
            render=<Productos tipo="Aventura"/>
        break;
        case "Rol":
            render=<Productos tipo="Rol"/>
        break;
        case "Lucha":
            render=<Productos tipo="Lucha"/>
        break;
        case "Carreras":
            render=<Productos tipo="Carreras"/>
        break;
    }

  return (
    <>
        <Carrusel setView={setView}/>
        {render}
    </>
  )
}
