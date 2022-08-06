import styled from 'styled-components';

export const ExerciceContainer = styled.section`
  width: 1300px;
  background-color: #08111C;
  margin:20px;
  margin-bottom: 40px;
  height: auto;
  margin-top: 5rem;
  padding: 15px;
  display: flex;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 38px, rgba(8, 17, 28,0.22) 0px 15px 30px;
  margin-left: 200px;
  justify-content: flex-end;
  @media screen and (max-width: 1300px){
    align-self: center;
    justify-self: center;
    margin-left: 0px;
  }
`;

export const VideoArea = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Main = styled.section`
  width: 1900px;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: -200px;

  @media screen and (max-width: 1300px){
    width: 140%;
    padding: 20px;
    margin-left: 0px;
  }
`;

export const Darknessbackground = styled.section`
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
  background-color: rgba(0,0,0,0.6),
`;
