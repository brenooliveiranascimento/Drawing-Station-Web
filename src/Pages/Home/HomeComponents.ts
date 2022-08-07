import styled from 'styled-components';

export const MainContent = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-left: 200px;
  z-index: 1;
  h1 {
    color: #fff;
  }
  @media screen and (max-width: 1400px){
    margin-left: 0px;
    margin-top: 90px;
    flex-wrap: wrap;
  }
`;

export const MainLimit = styled.section`
  width: auto;
  height: auto;
  margin-top: 2rem;
  justify-content: flex-end;
  margin-bottom: 15px;
  @media screen and (max-width: 1300px){
    margin-top: 20px;
    width: 95%;
  }
`;
