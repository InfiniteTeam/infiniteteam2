import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { getting_started } from './source'
import { Container } from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <>
        <Container fluid="sm" style={{
          marginTop: 100,
          marginBottom: 100
        }}>
          <ReactMarkdown source={getting_started}/>
        </Container>
      </>
    );
  }
}
