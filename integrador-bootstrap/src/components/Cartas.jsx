import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
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
                if(props.fil === "All" && element.category === props.tipo)
                {
                    return(
                    <CreaUnaCarta imagen={element.img} title={element.title} precio={element.price} key={key} item={element} id={element.id}/>
                    )
                }else{
                    if(element.category === props.tipo)
                    {
                        if(element.title == props.fil)
                        {
                            return(
                                <CreaUnaCarta imagen={element.img} title={element.title} precio={element.price} item={element} key={key} id={element.id}/>
                            )   
                        }
                    }
                }
            })
        }
        </>
    )
}

export function CreaUnaCarta(props)
{
    const{addItem} = useCart();

    return(
    <div className='micard-box'>
        <a href={"/details/"+props.id}><button tabindex="-1" className='fav-button'><i class="fas fa-plus-circle"></i></button></a>
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
                <button className='card-boton' onClick={()=> addItem(props.item)}>comprar</button>
            </div>
        </div>
    </div>
    )
}