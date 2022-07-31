import styled from 'styled-components';

export const SideContent = styled.aside`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  font-size: 30px;
  background-color: #212630;;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 99;
  padding: 100px;
  padding-bottom:20px;
  padding-top: 50px;

  .Side_bar_Icons {
    margin-top: -30px;
    }

    .Menu_Icon {
      margin-bottom: 0px;
    }

  @media screen and (max-width: 1300px){
    width: 100%;
    height: 4rem;
    flex-direction: row;
    justify-content: center;
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
  margin: 20px;
  color: white;

  :hover {
    color: #aaa;
  }

  @media screen and (max-width: 1300px){
    font-size: 26px;
    margin-bottom: -30px;
  }
`;
