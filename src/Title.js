import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Title extends Component {
  render() {
    return (
      <>
        <div style={{marginTop: 65.94}}/>
        <Container fluid className="Title-section-bg no-drag">
          <Container fluid="sm" className="Title-ct text-center">
            <h1 className="Title-title">
              {this.props.title}
            </h1>
            <h3 className="Title-subtitle">
              {this.props.subtitle}
            </h3>
          </Container>
        </Container>
      </>
    );
  }
}