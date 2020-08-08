import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'


export default class Home extends Component {
  render() {
    return (
      <>
        <footer className="Footer">
          <Container fluid="sm" className="text-center text-md-left">
            <Row>
              <Col md={6} className="mt-md-0 mt-3">
                <h4 className="text-uppercase">
                  InfiniteTeam
                </h4>
                <p>
                  무한한 미래를 만들어갑니다
                </p>
              </Col>
              <Col md={3}>
                <h5>사이트</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">홈</a>
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <h5>디스코드 봇</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/bots/azalea">Azalea</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="Footer-copyright text-center">
              Copyright © 2020 InfiniteTeam All rights reserved.
            </div>
          </Container>
        </footer>
      </>
    );
  }
}