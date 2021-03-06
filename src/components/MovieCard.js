import React from 'react'
import Card from "react-bootstrap/Card"
import { Button} from 'react-bootstrap'
import '../styles/MovieCard.css'

function MovieCard(props) {
  return (
    <Card style={{ width: '12.5rem' }}>
      <Card.Img variant="top" className="photo" src={props.imgsrc} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.decs}
        </Card.Text>
        <Button variant="primary">Click To Watch</Button>
      </Card.Body>
    </Card>
  )
}

export default MovieCard