import React, { Component } from 'react';
import Title from '../../components/Title'
import { Container, Row } from 'react-bootstrap'


export default class Home extends Component {
  render() {
    return (
      <>
        <Title title="Azalea" subtitle="텍스트 RPG 봇" className="Azalea-title-gradient" />
        <Container fluid>
          <Container fluid="sm" className="Intro-ct">
            <h1 className="Header no-drag">
              Azalea - 텍스트 RPG 게임봇
            </h1>
            <Container>
              <Row className="no-gutters">
                <p>
                  Azalea - 아젤리아는 텍스트형 RPG 디스코드 게임봇입니다. 자신의 캐릭터를 키우고 다양한 컨텐츠를 즐겨보세요.
                </p>
              </Row>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}