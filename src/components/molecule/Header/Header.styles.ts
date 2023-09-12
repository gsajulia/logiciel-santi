import styled, { keyframes } from 'styled-components';
import Image from "../../../assets/logiciel_santi_dark.svg"
import theme from '../../../assets/theme';
import { NavLink } from 'react-router-dom';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const Header = styled.header`
  width: 100%;
  background: var(--black-800);
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    margin-left: auto;
    margin-right: auto;
    color: var(--white);
  }

  ul {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 5rem;
    justify-content: center;
  }

  nav {
    width: 100%;
  }

  .logo-wrapper {
    margin: 2rem;
    display: flex;
    align-items: center;
  }
`;

export const LogoDark = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Image});
    background-size: cover;
    transform: rotateY(180deg);
  }

  &.spin {
    animation: ${spin} 2s linear;
  }
`;

export const Point = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${theme.colors.secondaryText};
`;

export const StyledLink = styled(NavLink)`
  font-size: 1.25rem;
  color: ${theme.colors.secondaryText};
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;