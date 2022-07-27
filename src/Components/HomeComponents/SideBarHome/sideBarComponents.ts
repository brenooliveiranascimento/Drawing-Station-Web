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

  .Side_bar_Icons {
    margin-top: 20px;
  }

  .Menu_Icon {
    margin-bottom: 50px;
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
`;
