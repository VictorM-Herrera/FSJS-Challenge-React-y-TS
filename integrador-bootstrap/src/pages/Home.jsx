import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import FaQ from '../components/FaQ'
import Anime from './Anime'
import Merch from './Merch'

export default function Home() {
  return (
    <MDBContainer fluid>
        <Anime fil="nada"/>
        <Merch fil="nada"/>
        <FaQ/>
    </MDBContainer>
  )
}
