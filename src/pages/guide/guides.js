import { getting_started, make_char, manage_char } from './source';

const guides = [
  {
    name: "getting_started",
    title: "시작하기",
    src: getting_started,
    whose: "azalea",
    home: true
  },
  {
    name: "make_char",
    title: "캐릭터 생성",
    src: make_char,
    whose: "azalea",
    home: false
  },
  {
    name: "manage_char",
    title: "캐릭터 관리",
    src: manage_char,
    whose: "azalea",
    home: false
  }
];

export default guides;