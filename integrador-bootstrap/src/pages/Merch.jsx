import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import ListaCartas from '../components/Cartas'

export default function Merch(props) {
  return (
    <MDBContainer fluid>
        <MDBRow className='soso'>
            <MDBCol size={12} xl="12">
                <div className='categoria'>
                    <h3>Merch destacada:</h3>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size={12} className="d-flex justify-content-center">
                <ListaCartas tipo="merch" fil={props.fil}/>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
}
