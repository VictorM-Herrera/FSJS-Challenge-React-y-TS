import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Carrusel from '../components/Carrusel'
import ListaCartas from '../components/Cartas'

export default function Anime() {
  return (
    <MDBContainer fluid>
        <MDBRow>
            <MDBCol size={12}>
                <Carrusel/>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>

            </MDBCol>
            <MDBCol>
                <ListaCartas/>
            </MDBCol>
            <MDBCol>

            </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
}
