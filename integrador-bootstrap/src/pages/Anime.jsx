import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Carrusel from '../components/Carrusel'
import ListaCartas from '../components/Cartas'

export default function Anime(props) {
  return (
    <MDBContainer fluid>
        <MDBRow>
            <MDBCol size={12}>
                <Carrusel/>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol xl="12">
                <div className='categoria'>
                    <h3>Animes destacados:</h3>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size={12} className="d-flex justify-content-center">
                <ListaCartas tipo="anime" fil={props.fil}/>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
}
