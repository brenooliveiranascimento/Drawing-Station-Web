import styled from 'styled-components';

export const UserMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  h1 {
    font-size: 30px;
    margin-bottom: 1rem;
  }

  span {
    font-size: 20px;
  }

`;

export const BtnArea = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

export const BtnUser = styled.button`
  background-color: rgba(0,0,0,0.0);
  color: white;
  border: 1px solid white;
  margin-top: 10px;
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 10px;
  min-width: 150px;
  transition: all 0.5s;
  font-size: 18px;

  :hover {
    background-color: white;
    color: black;
  }
`;

export const Divisor = styled.section`
  width: 100%;
  height: 1px;
  background-color: #aaa;
  margin-top: 1rem;
`;

export const ProgressArea = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  span {
    margin-top: 1rem;
    margin-bottom: -1.4rem;
  }
`;
