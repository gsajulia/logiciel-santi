import styled from 'styled-components';
import theme from '../../assets/theme';

export const Container = styled.div`
  color: ${theme.colors.text};
  display: flex;
  justify-content: space-between;
  margin-left: 15rem;

  h1 {
    font-family: 'Audiowide', cursive;
    font-size: 1.875rem;
  }

  p {
    max-width: 20rem;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LeftSection = styled.div`

`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  img {
    height: 20rem;
    cursor: pointer;
    margin-right: 4rem;
    border-radius: 10px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .arrow {
    width: 18px;
  }

  .goto {
    color: ${theme.colors.primary};
    text-decoration: none;
    max-height: 10px;
    cursor: pointer;
  }
`;

export const BottomText = styled.div`
  position: absolute;
  bottom: 2rem;;
  left: 40%;
`;