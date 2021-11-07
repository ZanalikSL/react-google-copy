import styled from "styled-components";

export const MainDiv = styled.div`
  background: #171717;
  position: fixed;
  bottom: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const CountryDiv = styled.div`
  font-family: arial, sans-serif;
  padding: 15px 30px;
  border-bottom: 1px solid #212327;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.54);
`;

export const FooterContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;

  @media only screen and (max-width: 1224px) {
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;

export const AnchorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Anchor = styled.a`
  text-decoration: none;
  display: block;
  padding: 15px;
  white-space: nowrap;
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #999da2;
  cursor: pointer;
  align-items: baseline;

  &:hover {
    text-decoration: underline;
  }
`;
