import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import botlist from '../datas/botlist';
import members from '../datas/members';
import Title from '../components/Title';

export default class Home extends Component {
  render() {
    const bots = botlist.map(
      (one, index) => (
        <Col key={index} xl={6} lg={6} md={6}>
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
                  one.beta &&
                    <Card.Text style={{
                      color: 'orangered',
                      fontSize: '10pt'
                    }}>
                      베타 버전입니다. 기능이 불안정할 수 있으며 예고없이 재시작, 점검, 기능 추가 또는 제거가 발생할 수 있습니다.
                    </Card.Text>
                }
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
                      {
                        one.details_href &&
                          <>
                            <Card.Link />
                            <Card.Link
                              className="Botproject-card-link text-infinite no-drag"
                              href={one.details_href}
                            >
                              자세히 보기
                            </Card.Link>
                          </>
                      }
                    </>
                    : <Button variant="infinite" disabled>개발중</Button>
                }
              </Card.Body>
            </Col>
          </Card>
        </Col>
      )
    );

    const membs = members.map(
      (one, index) => (
        <Col key={index} xl={4} lg={6} md={6}>
          <Card className="Members-card">
            <Card.Img variant="top" src={one.img} />
            <Card.Body className="Members-card-body text-center">
              <Card.Title className="Members-card-title">{one.title}</Card.Title>
              <Card.Subtitle className="Members-card-sub">{one.role}</Card.Subtitle>
              <Card.Text className="Members-card-desc pt-2">
                {one.description}
              </Card.Text>
              {
                one.github && <Card.Link href={one.github} title="GitHub 링크" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="lg"/>
                </Card.Link>
              }
            </Card.Body>
          </Card>
        </Col>
      )
    )

    return (
      <>
        <Title title="InfiniteTeam" subtitle="무한한 미래를 만들어갑니다" className="Title-gradient" />
        <Container fluid>
          <Container fluid="sm" className="ct Intro-ct">
            <h1 className="Header no-drag">
              디스코드 봇 프로젝트
            </h1>
            <Container>
              <Row className="no-gutters">
                {bots}
              </Row>
            </Container>

            <h1 className="Header no-drag">
              멤버 소개
            </h1>
            <Container>
              <Row className="no-gutters">
                {membs}
              </Row>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}
