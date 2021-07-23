import React from 'react';
import Slider from '../Components/Slider';
import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import img1 from '../img/img1.jpg';

export const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{paddingTop: '2rem'}, {paddingBottom: '2rem'} }>
          <Row>
              <Col>
                  <Card style={{width: '18rem'}}>
                      <Card.Img variant="top" src={img1} />
                      <Card.Body>
                          <Card.Title>Web</Card.Title>
                          <Card.Text>
                              More Text...
                          </Card.Text>
                          <Button variant="primary">It is my button</Button>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
                  <Card style={{width: '18rem'}}>
                      <Card.Img variant="top" src={img1} />
                      <Card.Body>
                          <Card.Title>Web</Card.Title>
                          <Card.Text>
                              More Text...
                          </Card.Text>
                          <Button variant="primary">It is my button</Button>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
                  <Card style={{width: '18rem'}}>
                      <Card.Img variant="top" src={img1} />
                      <Card.Body>
                          <Card.Title>Web</Card.Title>
                          <Card.Text>
                              More Text...
                          </Card.Text>
                          <Button variant="primary">It is my button</Button>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>
    </>
  )
}
