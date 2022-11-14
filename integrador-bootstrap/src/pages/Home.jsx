import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import Anime from './Anime'
import Merch from './Merch'

export default function Home() {
  return (
    <MDBContainer fluid>
        <Anime/>
        <Merch/>
    </MDBContainer>
  )
}
