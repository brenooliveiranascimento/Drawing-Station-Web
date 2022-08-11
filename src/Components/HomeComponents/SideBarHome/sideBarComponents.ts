import styled from 'styled-components';

export const SideContainer = styled.aside`
  width: 100px;
  height: 100%;
  position: fixed;
  display: flex;
  z-index: 99;
  background-color: #08111C;
  flex-direction: column;
  align-items: center;

  img {
    display: none;
  }
  
  a span{
    display: none;
  }

  .icon_side {
    color:white;
    font-size: 27px;
  }

  .icon_side:nth-child(1) {
    margin-top: 30px;
    margin-bottom: 2rem;
  }

  /* :hover {

    a {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    a span{
      display: block;
      margin-top: -25px;
      margin-bottom: 10px;
    }

  @media screen and (max-width: 1300px){
    width: 100%;
  }
  } */

  @media screen and (max-width: 1320px){
  }
  @media screen and (max-width: 1300px){
    width: 100%;
    height: 70px;
    flex-direction: row;
    justify-content: space-around;
    img {
      display: block;
      width:200px;
      margin-top: -20px;
    }
  :hover {
    a {
      display: block;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    a span{
      display: none;
      margin-top: -25px;
      margin-bottom: 10px;
    }
  }
  }
`;
