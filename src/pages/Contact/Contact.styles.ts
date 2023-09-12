import styled from 'styled-components';
import theme from '../../assets/theme';
export const Container = styled.div`
  h6 {
    color: ${theme.colors.text};
    font-size: 1.875rem;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`;

export const Button = styled.button`
  background-color: ${theme.colors.sky};
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  max-width: 22rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 300px;
  border: none;
  border-radius: 0.75rem;

  img {
    margin-left: 2rem;
  }

  span {
    color: ${theme.colors.darkText};
  }
`;