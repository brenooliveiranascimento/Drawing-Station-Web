import styled from 'styled-components';

export const ModulesContain = styled.nav`
  width: 100%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgba(33, 38, 48, 0.3);;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 38px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
  margin-top: 5rem;
  border-radius: 0px;

  @media screen and(max-width: 1300px) {
    justify-content: center;
  }

  @media screen and (max-width: 990px){
    justify-content: center;
  }

  @media screen and (max-width: 690px){
    justify-content: flex-start;
    padding: 0px;
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
    /* width: 290px; */
    width: 100%;
    height: 260px;
    margin-top: -70px;
    filter: brightness(80%);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    object-fit: cover;
  }
  .Name_Of_Module {
    position: absolute;
    z-index: 99;
    left: 10px;
    font-size: 24px;
    font-weight: 800;
    bottom: 80px;
    left: 23px;
  }

  span {
    z-index: 99;
    position: absolute;
    bottom: 60px;
    left: 23px;
  }

  .Construct_mode {
      bottom: 10px;
      font-weight: 500;
      color: #fff;
      font-size: 20px;
    }

  @media screen and (max-width: 990px){
    width: 200px;
    height: 200px;

    img {
      height: 180px;
      margin-top: 5px;
    }

    .Name_Of_Module {
      top: 10px;
    }

    span {
      bottom: 30px;
    }

    .Construct_mode {
      bottom: 65px;
    }
  }

  @media screen and (max-width: 990px){
    width: 40%;
    height: 220px;
  }
`;

export const ContentHeader = styled.section`
  width: 100%;
  height: auto;
  padding: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 4rem;
  z-index: 99;
  flex-direction: column;
  h1 {
    color: white;
    font-size: 29px;
  }
`;
