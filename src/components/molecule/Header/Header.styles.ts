import styled from 'styled-components'

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

.logo-dark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  overflow: visible;
}

.logo-dark::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/logiciel_santi_dark.svg");
  background-size: cover;
  transform: rotateY(180deg);
}

.spin {
  animation: spin 2s linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}

`