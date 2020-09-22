import * as azalea from './source/azalea';
import * as aztra_tips from './source/aztra_tips'

const guides = [
  {
    name: "getting_started",
    title: "시작하기",
    src: azalea.getting_started,
    whose: "azalea",
    home: true
  },
  {
    name: "make_char",
    title: "캐릭터 생성",
    src: azalea.make_char,
    whose: "azalea",
    home: false
  },
  {
    name: "manage_char",
    title: "캐릭터 관리",
    src: azalea.manage_char,
    whose: "azalea",
    home: false
  },
  {
    name: "template_formatting",
    title: "메시지 템플릿",
    src: aztra_tips.template_formatting,
    whose: "aztra_tips",
    home: false
  }
];

export default guides;