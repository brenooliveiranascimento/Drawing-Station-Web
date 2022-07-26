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
  display: flex;
  align-items: center;
  justify-content: center;

  .Icons {
    color: #aaa;;
    font-size: 26px;
  }
`;

export const InputAuth = styled.input`
  width: 300px;
  height: 35px;
  padding: 10px;
  margin: 10px;
  background-color: rgba(124, 74, 124, 0.4);
  border: none;
  font-size: 17px;
  border-radius: 20px;
  color: #fff;
`;

export const BtnSignIn = styled.button`
  width: 200px;
  height: 30px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }: any) => color};
  font-size: 18px;
  border-radius: 20px;
  margin: 5px;
  border: none;
  cursor: ${({ disabled }: any) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const BtnRegister = styled.button`
  width: 200px;
  font-size: 18px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 5px;
  border: 1px solid #fff;
  background-color: rgba(0,0,0,0.0);
  color: #fff;
`;
