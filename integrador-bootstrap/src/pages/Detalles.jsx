import React from 'react'
import { useParams } from 'react-router-dom'
import { CreaUnaCarta } from '../components/Cartas';
import arrayProductos from '../Data/productos';
import { useCart } from 'react-use-cart'

export default function Detalles() {
    const{id}=useParams();
  return (
    <div>
        {arrayProductos.map((element,index)=>{
            if(element.id == id)
            {
                return(
                <CreaUnaCarta imagen={element.img} title={element.title} precio={element.price} item={element} key={index} id={element.id}/> 
               )
            }
        })}
    </div>
  )
}
