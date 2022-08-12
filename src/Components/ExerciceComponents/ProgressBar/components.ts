import styled from 'styled-components';

export const MainBar = styled.section`
  height: 30px;
  width: auto;
  margin-top: 20px;
  align-items: center;
  padding: 10px;
  margin-left: -10px;
  display: flex;

  h2 {
    color: white;
    margin-left: -40px;
    z-index: 2;
    font-size: 20px;
  }
`;

export const BackBar = styled.article`
  height: 15px;
  z-index: 0;
  width: 200px;
  background-color: #2f3644;
  border-radius: 10px;
`;

export const Colorbar = styled.article`
  width: 30px;
  position: absolute;
  height: 15px;
  z-index: 1;
  transition: all 0.5s;
  background-color: #E86179;
  border-radius: 10px;
`;
