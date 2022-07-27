import styled from 'styled-components';

export const HeaderContent = styled.section`
  display: flex;
  width: 100%;
  height: 6rem;
  background-color: rgba(255, 255, 255, 0.1000);;
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
    height: 7rem;
  }
`;
