import styled from 'styled-components';

export const ModulesContain = styled.nav`
  width: 100%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.1000);;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 38px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
  margin-top: 5rem;
  border-radius: 30px;

  @media screen and(max-width: 1300px) {
    justify-content: center;
  }
`;

export const ModuleCard = styled.a`
  width: 320px;
  height: 360px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(15px);
  margin: 20px;
  -webkit-backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 38px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
  align-items: center;
  justify-content: center;
  img {
    width: 290px;
    height: 290px;
    margin-top: -20px;
    filter: brightness(60%);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    object-fit: cover;
  }
  .Name_Of_Module {
    position: absolute;
    z-index: 99;
    left: 10px;
    font-size: 20px;
    font-weight: 800;
    bottom: 80px;
    left: 20px;
  }
`;
