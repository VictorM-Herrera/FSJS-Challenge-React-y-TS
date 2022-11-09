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
        case "Teclado":
            render=<Productos tipo="Teclado"/>
        break;
        case "Auricular":
            render=<Productos tipo="Auricular"/>
        break;
        case "Mouse":
            render=<Productos tipo="Mouse"/>
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
    <div className="botonete">
        <button onClick={renderiza}>Todos</button>
        <button onClick={renderiza}>Teclado</button>
        <button onClick={renderiza}>Auricular</button>
        <button onClick={renderiza}>Mouse</button>
    </div>
    )
}
