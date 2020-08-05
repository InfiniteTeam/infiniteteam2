import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import azalea from './imgs/Azalea.jpg'

import './Home.css'
import './index.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <div style={{marginTop: 65.94}}/>
        <Container fluid className="Title-section-bg no-drag">
          <Container fluid="sm" className="Title-ct text-center">
            <h1 className="Title-title">
              InfiniteTeam
            </h1>
            <h3 className="Title-subtitle">
              무한한 미래를 만들어갑니다
            </h3>
          </Container>
        </Container>
        <Container fluid>
          <Container fluid="sm" className="Intro-ct">
            <h1 className="Header">
              디스코드 봇 프로젝트
            </h1>
            <Container>
              <Row>
                <Col xl={4} lg={3} md={6}>
                  <Card className="Botproject-card">
                    <Card.Img variant="top" src={azalea} />
                    <Card.Body>
                      <Card.Title>Azalea</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} lg={3} md={6}>
                  <Card className="Botproject-card">
                    <Card.Img variant="top" src={azalea} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} lg={3} md={6}>
                  <Card className="Botproject-card">
                    <Card.Img variant="top" src={azalea} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}
