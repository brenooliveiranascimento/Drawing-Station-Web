import styled from 'styled-components';

export const Contain = styled.section`
  display: flex;
  margin-top: 3rem;
  width: auto;
  @media screen and (max-width: 940px){
    margin-left: 0px;
    flex-wrap: wrap;
    width: 120%;
    justify-self: center;
    align-items: center;
  }

  @media screen and (max-width: 683px){
    margin-left: -10%;
    justify-content: flex-start;
    width: 130%;
  }

  @media screen and (max-width: 515px){
    margin-left: -20%;
    justify-content: flex-start;
    width: 170%;
  }
  @media screen and (max-width: 474px){
    justify-content: flex-start;
    margin-left: -5rem;
  }

  @media screen and (max-width: 396px){
    justify-content: center;
  }
`;

export const ModulesContain = styled.nav`
  max-width: 1300px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-direction: column;
  margin-left: -17rem;
  margin-top: -1rem;

  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 0rem;

  }

  @media screen and (max-width: 940px){
    margin-left: 0px;
    margin-top: 90px;
    flex-wrap: wrap;
    margin-left: 3rem;
  }

  @media screen and (max-width: 584px){
    margin-left: 5%;
  }
`;

export const ModuleCard = styled.a`
  width: 450px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1000);;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 38px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
  backdrop-filter: blur(15px);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 10px 10px 0px;
  align-items: center;
  justify-self: flex-start;

  .progress_container {
    padding-left: 10px;
  }

  .Img_Modules {
    width: 450px;
    height: 270px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .Name_Of_Module {
    font-size: 20px;
    font-weight: 800;
    text-align: start;
    margin-left: 10px;
    margin-top: 15px;
  }

  a {
    color: #7D2D49;
    text-decoration: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    .Icon {
      font-size: 60px;
      align-self: center;
      margin-bottom:30px;
      position: absolute;
      top: 60px;
    }
  }

  span {
    margin-top: 10px;
    line-height: 20px;
    text-align: start;
    padding-left: 10px;
    margin-top: 5px;
  }

  .Construct_mode {
      bottom: 2px;
      font-weight: 500;
      color: #fff;
      font-size: 15px;
    }

  @media screen and (max-width: 1300px){
    width: 350px;

    .Img_Modules {
      width: 350px;
    }
  }


  @media screen and (max-width: 1113px){
    width: 280px;

    .Img_Modules {
      width: 280px;
    }
  }

  @media screen and (max-width: 940px){
    width: 230px;
    align-items: flex-start;
    .Img_Modules {
      width: 230px;
    }
  }

  @media screen and (max-width: 818px){
    width: 190px;
    align-items: flex-start;
    height: 320px;
    .Img_Modules {
      width: 190px;
      height: 200px;
    }

    .progress_container {
      display: none;
    }
  }

  @media screen and (max-width: 500px){
    width: 200px;
    align-items: flex-start;
    .Img_Modules {
      width: 200px;
      height: 200px;
    }

    .progress_container {
      display: none;
    }
  }
`;

export const ContentHeader = styled.section`
  width: 100%;
  height: 200px;
  margin-top: 6rem;
  border-radius: 6px;
  justify-self: flex-end;
  display: flex;
  align-self: center;
  padding: 20px;
  margin-left: -15%;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1000);;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 38px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
  h1 {
    color: white;
    font-size: 29px;
  }
`;

export const SelectArea = styled.section`
  width: 50%;
  margin-top: 2rem;
  margin-bottom: -2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    margin: 40px
  }
`;
