import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from 'react-bootstrap';
import heading from '../../components/MarkdownRenderer';
import { GuideSidebar } from '../../components';
import guides from './guides';
import { notfound } from './source';

export default class Guide extends Component {
  render() {
    const ft = guides.filter((one) => one.whose === this.props.whose && one.name === this.props.name)[0];
    const src = ft
      ? ft.src
      : notfound
    return (
      <>
        <Container>
          <Row className="guide-ct-row">
            {
              !(src === notfound) &&
              <>
                <div className="pt-5" />
                <Col xs={0} sm={0} md={3} lg={2} >
                  <Container className="guide-sidebar">
                    <GuideSidebar whose={this.props.whose} />
                  </Container>
                </Col>
              </>
            }
            <Col xs={12} sm={12} md={9} lg={10}>
              <Container fluid="sm" style={{
                backgroundColor: "ghostwhite",
                paddingLeft: 30,
                paddingRight: 30
              }}
              className="shadow-sm">
                <div className="pt-5" />
                <ReactMarkdown
                  className="markdown"
                  source={src}
                  renderers={{
                    heading: heading
                  }}
                  escapeHtml={false}
                />
                <div className="pt-5" />
              </Container>
            </Col>
          </Row>
        </Container>
        <div className="pb-5" />
      </>
    );
  }
}
