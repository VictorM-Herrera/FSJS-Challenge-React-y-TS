import React from 'react'
import arrayProductos from '../Data/productos'

export default function ListaCartas() {
  return (
    <div className='card-section'>
        <GeneraCartas/>
    </div>
  )
}

function GeneraCartas()
{
    return(
        <>
        {
            arrayProductos.map((element,key)=>{
                return(
                    <CreaUnaCarta imagen={element.img} title={element.title} precio={element.price} key={key}/>
                )
            })
        }
        </>
    )
}

function CreaUnaCarta(props)
{
    return(
    <div className='micard-box'>
        <div className='micard-img'>
            <img src={props.imagen} alt="img" />
        </div>
        <div className='micard-body'>
            <div className='micard-title'>
                <h2>{props.title}</h2>
            </div>
            <div className='micard-text'>
                <p>{props.precio}</p>
            </div>
            <div className='micard-button'>
                <button className='boton'></button>
            </div>
        </div>
    </div>
    )
}