import styled from 'styled-components';

export const HeaderContent = styled.section`
  display: flex;
  width: 100%;
  height: 6rem;
  background-color: #BE4D68;
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
    height: 7rem;
  }
`;
