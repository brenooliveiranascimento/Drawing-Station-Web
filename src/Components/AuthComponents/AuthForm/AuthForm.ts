import styled from 'styled-components';

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 20px;
`;

export const FormLabel = styled.label`

`;

export const InputAuth = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
  margin: 10px;
  background-color: rgba(124, 74, 124, 0.4);
  border: none;
  border-radius: 20px;
  color: #fff;
`;

export const BtnSignIn = styled.button`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 5px;
  border: 1px solid #000;
`;

export const BtnRegister = styled.button`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 5px;
  border: 1px solid #000;
`;
