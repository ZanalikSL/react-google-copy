import { Anchor, AnchorContainer, Avatar, HeaderContainer } from "./styled";

import img from "../../assets/img/img_avatar.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <AnchorContainer>
        <Anchor href="#">Gmail</Anchor>
      </AnchorContainer>
      <AnchorContainer>
        <Anchor href="#">Imagens</Anchor>
      </AnchorContainer>
      <AnchorContainer>
        <Anchor href="#">Bolinhas</Anchor>
      </AnchorContainer>
      <a href="#">
        <Avatar src={img} alt="Avatar" />
      </a>
    </HeaderContainer>
  );
};
