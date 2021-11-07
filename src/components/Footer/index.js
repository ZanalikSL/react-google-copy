import leaf from "../../assets/img/leaf-16.ico";

import {
  Anchor,
  AnchorContainer,
  CountryDiv,
  FooterContentDiv,
  MainDiv,
} from "./styled";

export const Footer = () => {
  return (
    <MainDiv>
      <CountryDiv>
        <a>Portugal</a>
      </CountryDiv>
      <FooterContentDiv>
        <AnchorContainer>
          <Anchor href="#">Sobre</Anchor>
          <Anchor href="#">Publicidade</Anchor>
          <Anchor href="#">Negócios</Anchor>
          <Anchor href="#">Como Funciona a Pesquisa</Anchor>
        </AnchorContainer>
        <AnchorContainer>
          <Anchor href="#">
            <img src={leaf} alt="Leaf Icon" />{" "}
            Neutralização as emissões de carbono desde 2007.
          </Anchor>
        </AnchorContainer>
        <AnchorContainer>
          <Anchor href="#">Privacidade</Anchor>
          <Anchor href="#">Termos</Anchor>
          <Anchor href="#">Configurações</Anchor>
        </AnchorContainer>
      </FooterContentDiv>
    </MainDiv>
  );
};
