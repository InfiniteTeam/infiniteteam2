import azalea from '../imgs/Azalea.jpg';
import rtbot from '../imgs/rtbot.jpg';
import xeno from '../imgs/xeno.jpg';

const botlist = [
  {
    name: "azalea",
    title: "Azalea",
    img: azalea,
    description: "아젤리아는 텍스트형 RPG 게임봇입니다. 자신의 캐릭터를 키우고 다양한 컨텐츠를 즐겨보세요.",
    invite: "https://discordapp.com/oauth2/authorize?client_id=703146567380500501&scope=bot&permissions=8",
    details_href: "/bots/azalea"
  },
  {
    name: "rtbot",
    title: "알티봇",
    img: rtbot,
    description: "디스코드에서 다양한 미니게임을 즐겨보세요.",
    invite: "https://discordapp.com/api/oauth2/authorize?client_id=661477460390707201&permissions=8&scope=bot",
    details_href: null
  },
  {
    name: "xenobot",
    title: "제노봇",
    img: xeno,
    description: "여러가지 퍼즐 게임이 있는 게임봇입니다.",
    invite: null,
    details_href: null
  }
];

export default botlist;