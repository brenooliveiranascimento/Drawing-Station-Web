import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  h1 {
    font-size: 27px;
    margin-bottom: -1rem;
  }
`;

export const ProgressBar = styled.section`
  display: flex;
  width: auto;
  height: auto;
  align-items: flex-start;
  justify-content: center;
  flex-direction:column ;
  width: 200px;
`;

export const HandleBtn = styled.button`
  display: none;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #333944;
  color:white;
  padding: 10px;
  font-size: 18px;
  margin-right: 15px;
  @media screen and (max-width: 1300px){
    display: flex;
  }

  @media screen and (max-width: 610px){
    font-size: 15px;
    padding: 5px;
  }

`;
