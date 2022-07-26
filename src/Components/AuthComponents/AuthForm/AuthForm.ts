import styled from 'styled-components';

export const FormContainer = styled.section.attrs({
  autocomplete: 'off',
})`
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
/* 
  input:-webkit-autofill {
  -webkit-box-shadow: none;
  box-shadow: none;
}

input:-webkit-autofill {
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px black inset;
  box-shadow: 0 0 0px 1000px black inset;
  color: white;
}

input:-webkit-autofill {
    -webkit-text-fill-color: white !important;
} */

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px ease-in-out inset;
  transition: background-color 5000s ease-in-out 0s;
}

input {
  color: white
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

export const TermosDeUsoAre = styled.a`
  width: 90%;
  display: flex;
  background-color: rgba(0,0,0,0.0);
  text-decoration: none;
  span {
    color: white;
    text-align: center;
  }

  @media screen and (max-width: 700px){
    width:50%
  }

  @media screen and (max-width: 370px){
    width:45%
  }
`;

export const InputAuth = styled.input.attrs({
  autocomplete: 'false',
})`
  width: 300px;
  height: 35px;
  padding: 10px;
  margin: 10px;
  border-bottom: 2px solid white;
  background-color: rgba(0,0,0, 0.0);
  font-size: 17px;
  
  color: #fff;

  ::placeholder {
    color: #ddd;
  }

  @media screen and (max-width: 920px) {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
    margin-right: 2rem;
  }
`;

export const RespansiveLogo = styled.img`
  width: 50%;
  height: 40%;
  margin-top: -50px;
  display: none;
  @media screen and (max-width: 920px) {
    display: flex;
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

  @media screen and (max-width: 920px) {
    width: 40%;
  }
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

  @media screen and (max-width: 920px) {
    width: 40%;
  }
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
  right: 40px;
  color: white;
  background-color: rgba(0,0,0,0.0);
  font-size:20px ;
  margin-left: -20px;

  /* @media screen and (max-width: 920px) {
    right: 28%;
  }

  @media screen and (max-width: 840px) {
    right: 25%;
  }

  @media screen and (max-width: 700px) {
    right: 18%;
  }

  @media screen and (max-width: 580px) {
    right: 13%;
  } */
`;
