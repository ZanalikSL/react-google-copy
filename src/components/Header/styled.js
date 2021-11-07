import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: auto;
  min-height: 48px;
  align-items: center;
  flex-shrink: 0;
`;
export const AnchorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 15px;
`;

export const GoogleApps = styled.img`
  vertical-align: middle;
  width: 32px;
  height: 32px;
`;
export const Avatar = styled.img`
  vertical-align: middle;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 16px;
`;
export const Anchor = styled.a`
  text-decoration: none;
  color: white;
  font: 14px/27px Roboto, RobotoDraft, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;
