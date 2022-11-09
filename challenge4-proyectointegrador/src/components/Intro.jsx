import React from 'react'
import "../Style/style.css"

export default function Intro(props) {
  return (
    <header className='header-box'>
        <h1>Perificos para PC</h1>
        <Exploracion {...props}/>
    </header>
  )
}

function Exploracion(props)
{
    function navBody(e)
    {
        props.setCuerpo(e.target.textContent);
    }
    return(
        <nav className='nav-box'>
            <ul>
                <li><a href="#" onClick={navBody}>Productos</a></li>
                <li><a href="#" onClick={navBody}>Preguntas</a></li>
                <li><a href="#" onClick={navBody}>Aux</a></li>
            </ul>
        </nav>
    )
}