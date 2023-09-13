import styled from 'styled-components';
import theme from '../../../assets/theme';
export const Container = styled.div<{left: boolean}>`
  color: ${theme.colors.text};
  display: flex;
  justify-content: center;
  flex-direction: ${({left}) => left ? "row-reverse" : "row"};
  gap: 3rem;
  h2 {
    margin-bottom: 0.2rem;
  }

  .profile {
    margin: 1rem;
    border-radius: 12px;
  }

  .subtitle {
    color: ${theme.colors.secondaryText};
    h3 {
      padding-right: 0.5rem;
    }
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .description {
    max-width: 30rem;
    color: ${theme.colors.secondaryText};
  }
`;