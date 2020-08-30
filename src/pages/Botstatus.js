import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
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
      .get(url.resolve('/api/bot_status'))
      .then(res => {
        
        this.setState({
          status: res.data.status
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  FormatStatus(name) {
    var o = this.state.status.find(s => s.name === name)
    var status_text
    if (o) {
      switch (o.status) {
        case 'online':
          status_text = '온라인'
          break
        case 'idle':
          status_text = '점검 중'
          break
        case 'dnd':
          status_text = '재시작 준비 중'
          break
        default:
          status_text = '오프라인'
      }
      return (
        <>
          <div className={`circle ${o.status}`}/>
          {status_text}
        </>
        
      )
    }
    return '정보를 받아오고 있습니다...'
  }

  componentDidMount() {
    this.status_interval = setInterval(this.LoadStatus, 2000)
    this.LoadStatus()
  }

  componentWillUnmount() {
    clearInterval(this.status_interval)
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
                <Card.Text className="Botproject-card-dsec" as="div" style={{
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'center'
                }}>
                  {
                    this.FormatStatus(one.name)
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
            <h1 className="Header no-drag">
              실시간 서비스 상태
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
