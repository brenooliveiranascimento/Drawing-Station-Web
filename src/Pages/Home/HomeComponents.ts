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

`;

export const MainLimit = styled.section`
  width: 1300px;
  height: auto;
  margin-top: 5rem;
  padding: 15px;
  justify-content: flex-end;
  margin-bottom: 15px;
  @media screen and (max-width: 1300px){
    width: 80%;
    margin-top: 20px;
  }
`;
