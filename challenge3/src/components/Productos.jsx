import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Productos() {
  return (
    <Card>
    <Card.Img/>
    <Card.Body>
        <Card.Title>
            Ejemplo de Card
        </Card.Title>
        <Card.Text>
            Ejemplo del texto de una card
        </Card.Text>
    </Card.Body>
</Card>
  )
}
