import Header from "./components/molecule/Header/Header";
import styled from 'styled-components';
import theme from './assets/theme';
import GlobalStyle from "./createGlobalStyle";
import openTag from "./assets/open-tag.svg"
import closeTag from "./assets/close-tag.svg"

export const Container = styled.div`
  height: 100vh;
  background-color: ${() => theme.colors.background};
`;

export const Content = styled.div`
  margin-left: 15rem;
`;

export const OpenTag = styled.img`
  position: absolute;
  z-index: 1;
  margin-left: 2rem;
`;

export const CloseTag = styled.img`
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const MadeBy = styled.div`
  color: ${theme.colors.secondary};
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 0 1rem 1rem;
`;

export default function Layout({ children } : { children: JSX.Element }) {
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <OpenTag src={openTag} />
      <Content>{children}</Content>
      <CloseTag src={closeTag} />
      <MadeBy>Made by Logiciel Santi</MadeBy>
    </Container>
  );
}
