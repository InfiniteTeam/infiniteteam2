import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import botlist from '../datas/botlist';
import Title from '../components/Title'

export default class Home extends Component {
  render() {
    const bots = botlist.map(
      (one) => (
        <Col xl={6} lg={6} md={6}>
          <Card className="Botproject-card flex-row flex-wrap">
            <Col xl={4} lg={5} xs={9} className="Botproject-img">
              <Card.Img variant="top" src={one.img} style={{ marginTop: '1rem' }} />
            </Col>
            <Col xl={8} lg={7}>
              <Card.Body>
                <Card.Title className="Botproject-card-title">{one.title}</Card.Title>
                <Card.Text className="Botproject-card-dsec">
                  {one.description}
                </Card.Text>
                {
                  one.invite
                    ? <>
                      <Button
                        as="a"
                        variant="infinite"
                        className="Botproject-card-btn"
                        href={one.invite}
                        target="_blank"
                      >
                        초대하기
                    </Button>
                      <Card.Link />
                      <Card.Link
                        className="Botproject-card-link text-infinite no-drag"
                        href="#"
                      >
                        자세히 보기
                    </Card.Link>
                    </>
                    : <Button variant="infinite" disabled>개발중</Button>
                }
              </Card.Body>
            </Col>
          </Card>
        </Col>
      )
    )

    return (
      <>
        <Title title="InfiniteTeam" subtitle="무한한 미래를 만들어갑니다" className="Title-gradient"/>
        <Container fluid>
          <Container fluid="sm" className="Intro-ct">
            <h1 className="Header no-drag">
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
