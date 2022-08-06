import styled from 'styled-components';

export const MainContent = styled.section`
  display: flex;
  width: 70%;
  height: 100%;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-left: 200px;
  z-index: 1;
  h1 {
    color: #fff;
  }
  @media screen and (max-width: 1300px){
    margin-left: 0px;
    margin-top: 90px;
  }
`;

export const MainLimit = styled.section`
  width: auto;
  height: auto;
  margin-top: 2rem;
  margin-left: -2rem;
  justify-content: flex-end;
  margin-bottom: 15px;
  @media screen and (max-width: 1300px){
    width: 80%;
    margin-top: 20px;
  }
`;
