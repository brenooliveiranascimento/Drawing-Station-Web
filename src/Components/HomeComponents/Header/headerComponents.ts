import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 108%;
  height: auto;
  justify-self: center;
  margin-top: 3rem;

  h1 {
    font-size: 23px;
    text-align: center;
  }

  span {
    text-align: start;
    margin: 10px;
    font-weight: 600;
  }

  @media screen and (max-width: 1300px){
    margin-top: 0px;
  }
`;

export const LogoutButton = styled.button`
  width: 150px;
  font-weight: 600;
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  margin-bottom: 25px;
  font-size: 16px;
  background-color: black;
  color: white;
`;

export const HeaderContent = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #212630;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 38px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  align-items: flex-start;
  padding: 20px;
  flex-direction: column;

  h1 {
    color: white; 
    font-size: 23px;
  }

  span {
    color: #ddd;
  }

  @media screen and (max-width: 762px){
    height: 8rem;
    width: 120%;
    margin-left: -6%;
    h1 {
      text-align: start;
    }

    span {
      text-align: start;
      margin-left: -0px;
    }
  }

  @media screen and (max-width: 450px){
    height: 12rem;
  }
`;
