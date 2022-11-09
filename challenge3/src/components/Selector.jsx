import React from 'react'
import { Container, Dropdown, DropdownButton } from 'react-bootstrap'

export default function Selector() {
  return (
    <Container id="dropdown-basic-button" className='d-flex justify-content-center'>
        <DropdownButton title="Filtrar Productos">
            <Dropdown.Item href='#/action1'>Minerales</Dropdown.Item>
            <Dropdown.Item href='#/action2'>Armas</Dropdown.Item>
            <Dropdown.Item href='#/action3'>Materiales</Dropdown.Item>
            <Dropdown.Divider/>
                <Dropdown.Item href='#/action4'>Todo</Dropdown.Item>
        </DropdownButton>
    </Container>
  )
}

