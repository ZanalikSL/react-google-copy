import { useState } from "react";

import logo from "../../assets/img/googlelogo_light_color_272x92dp.png";
import keyboard from "../../assets/img/keyboard.png";
import mic from "../../assets/img/voice-microphone.ico";
import searchIcon from "../../assets/img/search_icon.png";

import {
  Anchor,
  ButtonConfirmation,
  ButtonContainer,
  FormContainerDiv,
  ImgDiv,
  KeyboardDiv,
  LanguageDetail,
  MainContentDiv,
  MicDiv,
  SearchButton,
  TextInput,
  TextInputContainer,
  UserSelectInputOption,
} from "./styled";

export const MainContent = () => {
  const [userInput, setUserInput] = useState("");

  const handleChangeInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
  };

  return (
    <MainContentDiv>
      <ImgDiv>
        <img src={logo} alt="Logo Google" />{" "}
      </ImgDiv>
      <FormContainerDiv>
        <form onSubmit={handleSubmit}>
          <TextInputContainer>
            <img src={searchIcon} alt="Leaf Icon" />{" "}
            <TextInput type="text" onChange={handleChangeInput} />
            <UserSelectInputOption>
              <ButtonConfirmation>
                <KeyboardDiv>
                  <img src={keyboard} alt="Keyboard Search Image" />
                </KeyboardDiv>
              </ButtonConfirmation>
              <ButtonConfirmation>
                <MicDiv>
                  <img src={mic} alt="Google mic icon" />
                </MicDiv>
              </ButtonConfirmation>
            </UserSelectInputOption>
          </TextInputContainer>
          <ButtonContainer>
            <SearchButton type="submit" value="send">
              Pesquisa Google
            </SearchButton>
            <SearchButton type="submit" value="send">
              Estou com sorte
            </SearchButton>
          </ButtonContainer>
        </form>
      </FormContainerDiv>
      <LanguageDetail>
        Disponibilizado pelo Google em:
        <Anchor href="#">English</Anchor>
      </LanguageDetail>
    </MainContentDiv>
  );
};
