import styled from 'styled-components';

export const MainContent = styled.section`
  display: flex;
  width: 70%;
  height: 100%;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-top: 90px;
  z-index: 1;
  h1 {
    color: #fff;
    text-align: center;
    font-size: 30px;
  }

  a {
    margin:20px
  }

  .Redes_sociais {
    display: flex;
    margin: 20px;
  }

  @media screen and (max-width: 1300px){
    margin-left: 0px;
  }
`;
