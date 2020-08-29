import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import config from '../config.json'
import url from 'url'

import botlist from '../datas/botlist'
import Title from '../components/Title'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: [
        {
          name: 'dd',
          status: 'dddd'
        }
      ]
    }
  }

  LoadStatus = async () => {
    axios
      .get(url.resolve(config.api, 'bot_status'))
      .then(res => {
        
        this.setState({
          status: res.data.status
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidMount() {
    this.LoadStatus()
  }

  render() {
    console.log(this.state)
    const bots = botlist.map(
      (one, index) => (
        <Col key={index} xl={6} lg={6} md={6}>
          <Card className="Botproject-card flex-row flex-wrap">
            <Col xl={4} lg={5} xs={9} className="Botproject-img">
              <Card.Img variant="top" src={one.img} style={{ marginTop: '1rem' }} />
            </Col>
            <Col xl={8} lg={7}>
              <Card.Body>
                <Card.Title className="Botproject-card-title">{one.title}</Card.Title>
                <Card.Text className="Botproject-card-dsec">
                  {
                    this.state.status.find(s => s.name === one.name) === null & this.state.status.find(s => s.name === one.name).status
                  }
                </Card.Text>
              </Card.Body>
            </Col>
          </Card>
        </Col>
      )
    )

    return (
      <>
        <Title title="봇 서비스 상태" subtitle="Bot Status" className="Botstatus-title-gradient" />
        <Container fluid>
          <Container fluid="sm" className="ct Intro-ct">
            <Button onClick={() => { this.setState({ status: this.state.status + 1 }) }} />
            <h1 className="Header no-drag">
              
            </h1>
            <Container>
              <Row className="no-gutters">
                {bots}
              </Row>
            </Container>
          </Container>
        </Container>
      </>
    )
  }
}
