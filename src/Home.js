import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <div style={{marginTop: 65.94}}/>
        <Container fluid className="Title-section-bg">
          <Container fluid="sm" className="Title-ct">
            <h1 className="Title-title">
              InfiniteTeam
            </h1>
          </Container>
        </Container>
        <Container fluid>
          <Container fluid="sm" className="Intro-ct">
            <h1 className="Header">
              소개
            </h1>
          </Container>
        </Container>
      </>
    );
  }
}
