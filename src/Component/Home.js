import React from 'react'
import {Card} from 'react-bootstrap'
import Img from  './Images/Capture.PNG'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export default function Home() {
    return (
        <div>
            <h4>Burger King</h4>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Img} />
  <Card.Body>
    <Card.Title>Hamburger</Card.Title>
    <Card.Text>
     Price: 200
    </Card.Text>
    <AiOutlinePlus />
    <AiOutlineMinus />
  </Card.Body>
</Card>
        </div>
    )
}
