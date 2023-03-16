import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  font-size: 16px;
  padding: 4px;
  border: 1px solid Plum;
  border-radius: 4px;
  color: DarkSlateBlue;
`;

export const Error = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 400;
  color: Red;
`;

export const Button = styled.button`
  color: inherit;
  padding: 8px;
  font-size: 16px;
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
