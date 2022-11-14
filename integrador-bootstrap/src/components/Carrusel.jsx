import React from 'react'
import { Carousel } from 'react-bootstrap'
import carruselPHotos from '../Data/carrusel'

export default function Carrusel() {
  return (
    <Carousel variant="dark" fade>
        {carruselPHotos.map((element, key)=>{
            return(
                <Carousel.Item className="d-flex justify-content-center" interval={9000}>
                    <img className="d-block w-1000" src={element} alt={"foto " + key}/>
                </Carousel.Item>
            )
        })}

    </Carousel>
  )
}
