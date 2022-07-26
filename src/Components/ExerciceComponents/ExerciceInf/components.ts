import styled from 'styled-components';

export const ExerciceInfContainer = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .btn_conclude {
    background-color: #08111C;
  }

  .check_icon_check {
    color: #12843e;
    align-self: center;
    justify-self: center;
    font-size: 25px;
    margin-left: 10px;
    margin-bottom: -6px;
  }

  .check_icon_no_check {
    color: #ff4242;
    align-self: center;
    justify-self: center;
    margin-bottom: -4px;
    font-size: 25px;
    margin-left: 10px;
    margin-bottom: -6px;
  }

  @media screen and (max-width: 610px){
    .check_icon_check {
      font-size: 20px;
      margin-left: 5px;
    }
    .check_icon_no_check {
      font-size: 20px;
      margin-left: 5px;
    }
    }
`;

export const BtnAreas = styled.section`
  width: 50%;
  padding-right: 20px;
  height: auto;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 760px){
    flex-direction: column;
  }
`;

export const NextBtn = styled.button`
  width: auto;
  height: 30px;
  border-radius: 6px;
  background-color: #08111C;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  justify-self: flex-end;
  span {
    font-size: 18px;
  }

  .change_exercice {
    font-size: 20px;
    color: white;
  }

  @media screen and (max-width: 777px){
    margin-left: 30px;
    margin-top: 5px;
    span {
      font-size: 16px;
      width: 100px;
    }
  }
`;

export const MaterialBtn = styled.button`
  padding: 5px;
  width: 160px;
  margin-top: 10px;
  height: 30px;
  margin-right: 2rem;
  border-radius: 6px;
  background-color: #BE4D68;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  align-items: center;

  span {
    font-size: 18px;
    align-self: flex-start;
    font-weight: 600;
  }

  @media screen and (max-width: 760px){
    width: 80px;
    align-self: flex-end;
    margin-right: -5px;
    margin-top: 20px;
    span {
      font-size: 16px;
    }
  }
`;

export const IncompletBtn = styled.button`
  width:auto;
  padding: 5px;
  background-color: #571C34;
  display: flex;
  height: auto;
  font-size: 20px;
  border-radius: 6px;
`;
