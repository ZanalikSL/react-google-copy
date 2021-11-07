import logo from '../../assets/img/googlelogo_light_color_272x92dp.png'

import { ImgDiv } from './styled';

export const MainContent = () => {
  return (
    <div>
      <ImgDiv><img src={logo} alt="Logo Google"/> </ImgDiv>
      <div></div>
      <div></div>
    </div>
  );
};
