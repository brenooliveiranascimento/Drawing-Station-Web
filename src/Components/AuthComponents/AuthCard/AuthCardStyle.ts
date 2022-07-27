import styled from 'styled-components';

export const CardContainer = styled.section`
  display: flex;
  width: 900px;
  height: 600px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1000);;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 38px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
  border-radius: 20px;

  @media screen and (max-width: 920px){  
    width: 80%;
    align-self: center;
    justify-self: center;
    flex-direction: column;
  }
`;
