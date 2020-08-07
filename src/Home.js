import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import botlist from './datas/botlist';

export default class Home extends Component {
  render() {
    const bots = botlist.map(
      (one) => (
        <Col xl={6} lg={6} md={6}>
          <Card className="Botproject-card flex-row flex-wrap">
            <Col xl={4} lg={5} xs={9} className="Botproject-img">
              <Card.Img variant="top" src={one.img} style={{marginTop: '1rem'}}/>
            </Col>
            <Col xl={8} lg={7}>
              <Card.Body>
                <Card.Title className="Botproject-card-title">{one.title}</Card.Title>
                <Card.Text className="Botproject-card-dsec">
                  {one.description}
                </Card.Text>
                {
                one.invite
                  ? <Button variant="infinite" className="Botproject-card-btn">초대하기</Button>
                  : <Button variant="infinite" disabled>개발중</Button>
                }
                <Card.Link />
                <Card.Link className="Botproject-card-link text-infinite" href="#">자세히 보기</Card.Link>
              </Card.Body>
            </Col>
          </Card>
        </Col>
      )
    )

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
              <Row className="no-gutters">
                {bots}
              </Row>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}
