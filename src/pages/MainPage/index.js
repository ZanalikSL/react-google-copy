import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContent } from "../../components/MainContent";

import { Wrapper } from "./styled";

export const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent />
      <Footer />
    </Wrapper>
  );
};
