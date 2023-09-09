import styled, { keyframes } from 'styled-components';
import Image from "../../../assets/logiciel_santi_dark.svg"

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

export const Header = styled.button`
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

  .title {
    font-size: 2.8rem;
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
