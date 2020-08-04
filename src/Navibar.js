import React, { Component } from 'react';
import { Nav, Navbar, Form, NavDropdown, Button, FormControl } from 'react-bootstrap'
import logo from './logo.png'
import discordicon from './imgs/Discord-Logo-Black.svg'
import navercafe from './imgs/navercafe.png'
import config from './config.json'

export default class Navibar extends Component {
  render() {
    return (
      <Navbar bg="white" expand="sm" fixed className="shadow rounded" classname="nav-item">
        <Navbar.Brand href="#home">
          <img src={logo} style={{ width: 40, marginRight: 10 }} />
          InfiniteTeam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <NavDropdown title="디스코드 봇" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Azalea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">알티봇</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="커뮤니티" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={window.open(config.discord_invite, '_blank')}>
                <img src={discordicon} style={{ width: 27, marginRight: 10 }} />
                디스코드 서포트 서버
              </NavDropdown.Item>
              <NavDropdown.Item onClick={window.open(config.navercafe, '_blank')}>
              <img src={navercafe} style={{ width: 22, marginRight: 12, marginLeft: 2 }} />
                네이버 카페
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}