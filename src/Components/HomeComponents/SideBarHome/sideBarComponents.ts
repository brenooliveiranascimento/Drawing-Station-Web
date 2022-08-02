import styled from 'styled-components';

export const SideContainer = styled.aside`
  width: 70px;
  height: 100%;
  background-color: aqua;
  position: fixed;
  display: flex;
  z-index: 99;
  background-color: #08111C;
  flex-direction: column;
  transition: all 0.3s;
  align-items: center;

  img {
    display: none;
  }

  a {
    transition: all 1s;
  }
  
  a span{
    display: none;
    transition: all 1s;
  }

  .icon_side {
    color:white;
    font-size: 27px;
  }

  .icon_side:nth-child(1) {
    margin-top: 30px;
    margin-bottom: 2rem;
  }

  :hover {
    width: 200px;
    transition: all 0.3s;

    a {
      display: flex;
      align-items: center;
      transition: all 1s;
      flex-direction: column;
      justify-content: center;
    }

    a span{
    transition: all 1s;
      display: block;
      margin-top: -25px;
      margin-bottom: 10px;
    }

  @media screen and (max-width: 1300px){
    width: 100%;
  }
  }

  @media screen and (max-width: 1320px){
    transition: none
  }
  @media screen and (max-width: 1300px){
    width: 100%;
    height: 70px;
    flex-direction: row;
    transition: none;
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
      transition: none;
      flex-direction: column;
      justify-content: center;
    }

    a span{
    transition: none;
      display: none;
      margin-top: -25px;
      margin-bottom: 10px;
    }
  }
  }
`;
