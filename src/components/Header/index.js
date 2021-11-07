import { AnchorContainer, Avatar, HeaderContainer } from "./styled";

import img from '../../assets/img/img_avatar.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <AnchorContainer>
        <a href="#">Gmail</a>
      </AnchorContainer>
      <AnchorContainer>
        <a href="#">Imagens</a>
      </AnchorContainer>
      <AnchorContainer>
        <a href="#">Bolinhas</a>
      </AnchorContainer><a href="#"><Avatar src={img} alt="Avatar" /></a>
      
    </HeaderContainer>
  );
};
