import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import FaQ from '../components/FaQ'

export default function Faqpage() {
  return (
    <MDBContainer fluid>
        <MDBRow>
            <FaQ/>
        </MDBRow>
    </MDBContainer>
  )
}
