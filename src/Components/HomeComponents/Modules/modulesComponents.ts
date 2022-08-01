import styled from 'styled-components';

export const ModulesContain = styled.nav`
  width: 100%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  border-radius: 0px;
  justify-content: flex-start;
  padding-left: 6%;


  @media screen and(max-width: 1300px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 514px){
    justify-content: center;
  }
`;

export const ModuleCard = styled.a`
  width: 290px;
  height: 320px;
  align-self: flex-start;
  display: flex;
  justify-self: flex-start;
  flex-direction: column;
  padding: 20px;
  background-color: #2b2b2b;
  backdrop-filter: blur(15px);
  margin: 20px;
  align-items: center;
  justify-content: center;
  /* img {
    width: 250px;
    height: 190px;
    margin-top: -100px;
    filter: brightness(80%);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    object-fit: cover;
  } */
  .Name_Of_Module {
    font-size: 24px;
    font-weight: 800;
    margin-top: 60px;
    text-align: center;
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
  }

  .Construct_mode {
      bottom: 2px;
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
      width: 190px;
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

    img {
      width: 140px;
    }

  }

  @media screen and (max-width: 514px){
    width: 80%;
    height: 300px;

    img {
      width: 160px;
    }
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
