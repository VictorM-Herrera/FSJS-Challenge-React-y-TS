import React, { useState } from 'react'
import arrayProductos from '../Data/Data'
import CarruselGrande from './CarruselGrande'

export default function Productos(props) {
  return (
    <>
    <div id="center">
        <CarruselGrande/>
    <div className='card-section'>
        <GeneraCards {...props}/>
    </div>
    </div>

    </>

  )
}
function GeneraCards(props){

    return(
        <>
        {
        arrayProductos.map((element,key)=>
        {
            if(props.tipo !="Todos")
            {
                if(element.tipo == props.tipo)
                {
                    return(
                        <Cards elementos={element} key={key}/>
                    )                
                }                
            }else{
                return(
                    <Cards elementos={element} key={key}/>
                )  
            }

        })}
        </>
    )
}

function Cards(props)
{
    return(
        <div className='card-box'>
            <div className='card-img'>
                <img className='imagen' src={props.elementos.img}/>
            </div>
            <div className='card-body'>
                <div className='titulo-card'>
                    <h3>{props.elementos.titulo}</h3>
                </div>
                <p>${props.elementos.precio}</p>
                <button type="button" className='boton'>Comprar</button>
            </div>
        </div>
    )
}