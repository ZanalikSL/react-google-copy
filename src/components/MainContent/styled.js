import styled from "styled-components";

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 40vh;
`;

export const MainContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #202124;
  display: flex;
  border: 1px solid #5f6368;
  box-shadow: none;
  border-radius: 24px;
  height: 4px;
  width: 84vh;
  padding: 16px;
  margin-top: 2vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
`;
export const SearchButton = styled.button`
  background-color: #303134;
  border: 1px solid #303134;
  border-radius: 4px;
  color: #e8eaed;
  font-family: arial, sans-serif;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;
export const TextInput = styled.input`
  flex: 1;
  border: none;
  height: 34px;
  outline: none;
  background-color: transparent;
  color: #e8eaed;
  font-size: 16px;
  padding-left: 10px;
`;

export const UserSelectInputOption = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-top: -5px;
  align-items: stretch;
  flex-direction: row;
`;

export const ButtonConfirmation = styled.button`
  flex: 1 0 auto;
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  line-height: 44px;
`;

export const KeyboardDiv = styled.div`
  width: 18px;
  height: 40px;
  vertical-align: middle;
`;

export const MicDiv = styled.div`
  height: 34px;
  vertical-align: middle;
`;

export const LanguageDetail = styled.div`
  color: #bdc1c6;
  display: inline-block;
  line-height: 28px;
  font-size: small;
  font-family: arial, sans-serif;
`;

export const Anchor = styled.a`
  text-decoration: none;
  padding: 0 3px;
  font-family: arial,sans-serif;
  color: #c58af9;

  &:hover {
    text-decoration: underline;
  }
`