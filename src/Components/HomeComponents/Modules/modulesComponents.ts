import styled from 'styled-components';

export const ModulesContain = styled.nav`
  width: auto;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 0px;

  @media screen and(max-width: 1300px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 514px){
    justify-content: center;
  }
`;

export const ModuleCard = styled.a`
  width: 500px;
  height: 400px;
  align-self: flex-start;
  display: flex;
  justify-self: flex-start;
  flex-direction: column;
  background-color: #2b2b2b;
  backdrop-filter: blur(15px);
  margin: 0px 10px 0px;
  align-items: center;
  justify-content: flex-start;

  .Img_Modules {
    width: 500px;
    height: 270px;
    filter: brightness(80%);
    object-fit: cover;
  }

  .Name_Of_Module {
    font-size: 20px;
    font-weight: 800;
    text-align: start;
    margin-left: 10px;
    margin-top: 5px;
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

  @media screen and (max-width: 990px){
    width: 200px;
    height: 200px;
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
