import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { getting_started } from './source'
import { Container } from 'react-bootstrap'
import heading from '../../components/MarkdownRenderer'

export default class App extends Component {
  render() {
    return (
      <>
        <Container style={{
          backgroundColor: "ghostwhite"
        }}>
          <Container fluid="sm">
            <div className="pt-5"/>
              <ReactMarkdown
                className="markdown"
                source={getting_started}
                renderers={{
                  heading: heading
                }}
                escapeHtml={false}
              />
            <div className="pb-5"/>
          </Container>
        </Container>
      </>
    );
  }
}
