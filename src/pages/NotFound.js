import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { a404 } from '../imgs';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Container fluid className="text-center"
          style={{
            marginTop: 250
          }}
        >
          <img src={a404} style={{ width: 240 }} alt="404" />
          <h3 style={{
            fontFamily: 'NanumSquare',
            fontWeight: 800,
            color: "#3f3f3f",
            marginBottom: 400
          }}
          >
            존재하지 않는 페이지입니다!
          </h3>
        </Container>
      </>
    );
  }
}
