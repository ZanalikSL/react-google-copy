import { Anchor, AnchorContainer, Avatar, GoogleApps, HeaderContainer } from "./styled";

import img from "../../assets/img/img_avatar.png";
import apps from "../../assets/img/google-icon.png";

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
        <a href="#">
        <GoogleApps src={apps} />
        </a>
      </AnchorContainer>
      <a href="#">
        <Avatar src={img} alt="Avatar" />
      </a>
    </HeaderContainer>
  );
};
