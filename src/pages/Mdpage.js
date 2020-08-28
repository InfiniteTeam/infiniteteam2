import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap';
import heading from '../components/MarkdownRenderer';

export default class Guide extends Component {
  render() {
    return (
      <Container fluid="sm" style={{
        backgroundColor: "ghostwhite",
        paddingLeft: 30,
        paddingRight: 30
      }}
        className="shadow-sm">
        <div className="pt-5" />
        <ReactMarkdown
          className="markdown"
          source={this.props.src}
          renderers={{
            heading: heading
          }}
          escapeHtml={false}
        />
        <div className="pt-5" />
      </Container>
    );
  }
}