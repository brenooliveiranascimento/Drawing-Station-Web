import styled from 'styled-components';

export const Contain = styled.section`
  display: flex;
  @media screen and (max-width: 940px){
    margin-left: 0px;
    flex-wrap: wrap;
    width: 120%;
    justify-self: center;
    align-items: center;
  }

  @media screen and (max-width: 683px){
    justify-content: flex-start;
    margin-left: 10%;
    width: 100%;
  }

  @media screen and (max-width: 515px){
    margin-left: 0%;
  }
  @media screen and (max-width: 474px){
    justify-content: center;
    margin-left: -1rem;
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
  background-color: #2b2b2b;
  backdrop-filter: blur(15px);
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
    height: 290px;
    .Img_Modules {
      width: 190px;
      height: 200px;
    }

    .progress_container {
      display: none;
    }
  }
`;

export const ContentHeader = styled.section`
  max-width: 1300px;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 99;
  align-self: center;
  justify-self: center;
  padding: 20px;
  margin-left: -15%;
  flex-direction: column;
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
