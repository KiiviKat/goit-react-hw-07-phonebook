import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;
`;

export const Button = styled.button`
  color: inherit;
  padding: 4px;
  font-size: 12px;
  border: 1px solid DarkSlateBlue;
  border-radius: 4px;
  background-color: Plum;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: DarkSlateBlue;
    color: White;
  }
`;
