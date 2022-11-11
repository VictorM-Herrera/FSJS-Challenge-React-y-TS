import React from 'react'

export default function Botonera(props) {
    function renderiza(e)
    {
        props.setView(e.target.textContent);
    }
    return(
    <div className="botonera">
        <button onClick={renderiza}>{props.content[0]}</button>
        <button onClick={renderiza}>{props.content[1]}</button>
        <button onClick={renderiza}>{props.content[2]}</button>
        <button onClick={renderiza}>{props.content[3]}</button>
    </div>
    )
}
