import styled from 'styled-components';

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 20px;

  span {
    color: #c4354f;
    font-size: 18px;

  }

  input:-webkit-autofill {
  -webkit-box-shadow: none;
}

input:-webkit-autofill {
  -webkit-text-fill-color: #000;
  -webkit-box-shadow: 0 0 0px 1000px #422E42 inset;
}

input:-webkit-autofill {
    -webkit-text-fill-color: white !important;
}
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

// export const InputAuth = styled.input`
//   width: 300px;
//   height: 35px;
//   padding: 10px;
//   margin: 10px;
//   background-color: rgba(124, 74, 124, 0.7);
//   border: none;
//   font-size: 17px;
//   border-radius: 20px;
//   color: #fff;
// `;

export const InputAuth = styled.input`
  width: 300px;
  height: 35px;
  padding: 10px;
  margin: 10px;
  border-bottom: 2px solid white;
  background-color: rgba(124, 74, 124, 0.0);
  font-size: 17px;
  color: #fff;

  ::placeholder {
    color: #ddd;
  }
`;

export const BtnSignIn = styled.button`
  width: 300px;
  height: 30px;
  display: flex;
  color: ${({ disabled }: any) => (disabled ? '#aaa' : '#fff')};
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
  width: 300px;
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

export const LinksArea = styled.nav`
  width: 250;
  display: flex;
  margin: 20px;
`;

export const LinkBtn = styled.a`
  color: white;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
  span {
    color: white;
  }
`;

export const BtnShow = styled.button`
  position: absolute;
  right: 40px;
  color: white;
  background-color: rgba(0,0,0,0.0);
  font-size:20px ;
`;
