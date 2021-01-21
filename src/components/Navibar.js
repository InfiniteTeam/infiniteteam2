import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import logo from '../imgs/logo.png';
import discordicon from '../imgs/Discord-Logo-Black.svg';
import azalea from '../imgs/Azalea.jpg';
import aztra from '../imgs/aztra.png';

import config from '../config.json';

export default class Navibar extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: 65.94 }}>
          <Navbar bg="white" expand="sm" fixed="top" className="nav-item shadow no-drag">
            <Navbar.Brand href="/">
              <img src={logo} alt="" style={{ width: 40, marginRight: 10 }} />
              InfiniteTeam
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">홈</Nav.Link>
                <NavDropdown title="디스코드 봇" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/bots/Azalea">
                    <img src={azalea} alt="" style={{ width: 27, marginRight: 10 }} />
                    Azalea
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://aztra.xyz">
                    <img src={aztra} alt="" style={{ width: 22, marginRight: 12, marginLeft: 2 }} />
                    Aztra
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="커뮤니티" id="basic-nav-dropdown">
                  <NavDropdown.Item as="a" href={config.discord_invite} target='_blank'>
                    <img src={discordicon} alt="" style={{ width: 27, marginRight: 10 }} />
                    디스코드 서포트 서버
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="봇 가이드" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/guide/azalea">
                    <img src={azalea} alt="" style={{ width: 27, marginRight: 10 }} />
                    Azalea
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://aztra.xyz/docs">
                    <img src={aztra} alt="" style={{ width: 27, marginRight: 10 }} />
                    Aztra
                  </NavDropdown.Item>
                </NavDropdown>
                {/*<Nav.Link href="/status">봇 상태</Nav.Link>*/}
                {/*<Nav.Link href="/recruitment">멤버 모집</Nav.Link>*/}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}