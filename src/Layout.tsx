import Header from "./components/molecule/Header/Header";
import styled from 'styled-components';
import theme from './assets/theme';

export const Container = styled.div`
  background-color: ${() => theme.colors.background};

`;

export default function Layout({ children } : { children: JSX.Element }) {
  return (
    <Container>
      <Header/>
      {children}
    </Container>
  );
}
