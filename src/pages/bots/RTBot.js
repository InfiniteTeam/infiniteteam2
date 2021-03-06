import React, { Component } from 'react';
import Title from '../../components/Title';
import { Container, Button } from 'react-bootstrap';
import botlist from '../../datas/botlist';

export default class Home extends Component {
  render() {
    return (
      <>
        <Title title="RT Bot" subtitle="텍스트 미니게임봇" className="Azalea-title-gradient" />
        <Container fluid>
          <Container fluid="sm" className="ct">
            <h1 className="Header">
              알티봇 - 텍스트형 미니게임봇
            </h1>
            <Container>
              <p>
                RT Bot 알티봇은 텍스트형 도박기반의 미니게임 디스코드 게임봇입니다.<br />
                자신의 돈을 모아서 랭킹에도 등재되고 다양한 미니게임을 즐겨보세요.
              </p>

              <h2 className="Azalea-intro-title no-drag">
                사용자 친화적인 봇
              </h2>
              <p>
                Azalea는 사용자가 이용하기 편리하도록 직관적이고 깔끔한 디자인을 채택했습니다.<br />
                또한 디스코드 채팅에서의 여러가지 경우를 고려하여 이용하는 데에 불편 요소가 없도록 하고 있습니다.
              </p>

              <h2 className="Azalea-intro-title no-drag">
                무한한 가능성으로 도약하는 봇
              </h2>
              <p>
                Azalea는 꾸준한 업데이트로 더욱 재미있는 컨텐츠를 추가하고 있습니다.<br />
                아직은 부족한 게 많지만 무한한 가능성을 품고 앞으로 점점 나아가고 있습니다.
              </p>
            </Container>
            <Container className="Azalea-bottom-ct">
              <Button
                as="a"
                variant="azalea"
                className="Botproject-card-btn mr-5"
                href={botlist.find(one => one.name === 'azalea').invite}
                target="_blank"
              >
                초대하기
              </Button>
              <Button
                as="a"
                variant="azalea"
                className="Botproject-card-btn"
                href="/guide/azalea"
                target="_blank"
              >
                봇 가이드
              </Button>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}
