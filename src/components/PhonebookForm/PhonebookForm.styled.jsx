import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 10px;
  border: 1px solid silver;
  margin-bottom: 20px;
`;

export const ErrorText = styled.div`
color: red;
margin-top: -15px;
margin-bottom: 20px;
`

export const Input = styled(Field)`
  width: 200px;
  height: 20px;
  margin-bottom: 20px;
  padding: 10px;
  outline: 0px;
  border-radius: 5px;
`;

export const Label = styled.label`
margin-bottom: 10px;`

export const ButtonSubmit = styled.button`
  width: 100px;
  height: 20px;
  border-radius: 5px;
  border-width: 0;
  background-color: #00ddff;
  cursor: pointer;
`;
