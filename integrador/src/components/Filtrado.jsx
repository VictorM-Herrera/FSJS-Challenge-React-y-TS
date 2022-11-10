import React, { useState } from 'react'
import arrayProductos from '../Data/Data'
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
    }

  return (
    <>
        <Mostrar setView={setView}/>
        {render}
    </>
  )
}

function Mostrar(props)
{
    function renderiza(e)
    {
        props.setView(e.target.textContent);
    }
    return(
    <div className="botonera">
        <button onClick={renderiza}>Todos</button>
        <button onClick={renderiza}>Deportes</button>
        <button onClick={renderiza}>Musical</button>
        <button onClick={renderiza}>Accion</button>
    </div>
    )
}
