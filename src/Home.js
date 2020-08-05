import React, { Component } from 'react';
import { Container} from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <Container fluid className="Title-section-bg">
          <Container fluid="sm" className="Title-ct">
            <h1 className="Title-title">
              InfiniteTeam
            </h1>
          </Container>
        </Container>
      </>
    );
  }
}
