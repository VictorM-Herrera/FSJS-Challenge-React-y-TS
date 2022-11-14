import React, { useState } from 'react'
import arrayProductos from '../Data/productos'

export default function ListaCartas(props) {
  return (
    <div className='card-section'>
        <GeneraCartas {...props}/>
        <GeneraCartas {...props}/>
    </div>
  )
}

function GeneraCartas(props)
{
    return(
        <>
        {
            arrayProductos.map((element,key)=>{
                if(element.category === props.tipo)
                {
                    return(
                        <CreaUnaCarta imagen={element.img} title={element.title} precio={element.price} key={key}/>
                    )                    
                }
            })
        }
        </>
    )
}

function CreaUnaCarta(props)
{
    const [icon,setIcon]=useState("far fa-heart");
    function cambiarIcon(e)
    {
        if(e.target.classList == "far fa-heart")
        {
            setIcon("fas fa-heart");
        }else{
            setIcon("far fa-heart");
        }
        
    }
    return(
    <div className='micard-box'>
        <button className='fav-button' onClick={cambiarIcon}><i class={icon}></i></button>
        <div className='micard-img'>
            <img src={props.imagen} alt="img" />
        </div>
        <div className='micard-body'>
            <div className='micard-title'>
                <h2>{props.title}</h2>
            </div>
            <div className='micard-text'>
                <p>${props.precio}</p>
            </div>
            <div className='micard-button'>
                <button className='card-boton'>comprar</button>
            </div>
        </div>
    </div>
    )
}