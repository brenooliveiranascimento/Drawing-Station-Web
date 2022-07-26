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
    font-size: 35px;
    text-align: center;
  }

  span {
    text-align: start;
    margin: 10px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
  }

  @media screen and (max-width: 1300px){
    width: 100%;
  }

  @media screen and (max-width: 940px){
    width: 100%;
    margin-top: -3rem;
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
  padding: 20px;
  justify-content: center;
  flex-direction: column;

  .Message {
    margin-left: 2px;
  }

  h1 {
    color: white; 
    font-size: 23px;
    text-align: center;
    margin-top: 1rem;
  }

  span {
    text-align: center;
    color: #ddd;
  }

  @media screen and (max-width: 762px){
    height: auto;
    width: 120%;
    margin-left: -6%;

    h1 {
      text-align: start;
    }

    span {
      margin-left: -0px;
      text-align: start;
    }
  }

`;
