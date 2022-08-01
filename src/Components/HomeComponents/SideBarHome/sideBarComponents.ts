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
  }
`;
