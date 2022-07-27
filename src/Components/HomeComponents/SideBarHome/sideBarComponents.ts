import styled from 'styled-components';

export const SideContent = styled.aside`
  width: 7rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 30px;
  padding: 10px;
  background-color: #08111c;;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 99;

  .Side_bar_Icons {
    margin-top: 20px;
  }

  .Menu_Icon {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 1300px){
    width: 100%;
    height: 4rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .Side_bar_Icons {
    margin-top: -30px;
    }

    .Menu_Icon {
      margin-bottom: 0px;
    }
  }
`;

export const SideBarBtn = styled.button`
  display: flex;
  align-items: center;
  height: 35px;
  width: 35px;
  background-color: rgba(0,0,0,0.0);
  align-items: center;
  font-size: 30px;
  justify-content: center;
  margin-top: 30px;
  border-radius: 100%;
  color: white;

  :hover {
    color: #aaa;
  }

  @media screen and (max-width: 1300px){
    font-size: 26px;
  }
`;
