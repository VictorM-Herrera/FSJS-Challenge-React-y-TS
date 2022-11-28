import React from 'react'
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import arrayProductos from '../Data/productos'
import { useParams } from 'react-router-dom'
import { CreaUnaCarta } from '../components/Cartas';
import Anime from './Anime';
import Merch from './Merch';

export default function HomeNoFaq() {
    let {filtrado}= useParams();

    if(filtrado == "All")
    {
      return(
        <MDBContainer fluid>
          <Anime fil="All"/>
          <Merch fil="All"/>
        </MDBContainer>
      )
    }else{
        return (
          <MDBContainer fluid>
            <MDBRow className='justify-content-center'>
            <div className='card-section'>
                {arrayProductos.map((element, index) =>{
                  if(element.title.toLowerCase().includes(filtrado))
                  {
                    return(
                        <CreaUnaCarta imagen={element.img} title={element.title} precio={element.price} key={index} item={element} id={element.id}/>
                    )
                  }
                })}
            </div>
            </MDBRow>
          </MDBContainer>
        )
    }

}
