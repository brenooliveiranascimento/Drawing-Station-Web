import styled from 'styled-components';

export const MainContent = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-self: center;
  align-items: center;
  z-index: 99;
  h1 {
    color: #fff;
  }

`;

export const MainLimit = styled.section`
  width: 1140px;
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 4rem;
  @media screen and (max-width: 1300px){
    width: 80%;
    margin-top: 20px;
  }
`;
