import styled from 'styled-components';

export const MainContent = styled.section`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-top: 90px;
  z-index: 1;
  h1 {
    color: #fff;
    align-self: center;
    text-align: center;
    font-size: 30px;
  }

  span {
    text-align: center;
    margin-top: 1rem;
  }

  a {
    margin:20px;
    align-self: center;
  }

  .Redes_sociais {
    display: flex;
    margin: 20px;
  }

  @media screen and (max-width: 1300px){
    margin-left: 0px;
  }
`;
