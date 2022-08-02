import styled from 'styled-components';

export const MaterialsContainer = styled.section`
  width: 98%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #212630;
  border-radius: 6px;
  margin-top: 10px;
  h2 {
    color: white;
  }
`;

export const MaterialArea = styled.article`
  display: flex;
  flex-direction: column;

  span {
    font-size: 20px;

    :nth-child(1) {
      margin-top: 20px;
    }
  }
`;

export const MutipleColorArea = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  span {
    font-size: 20px;
  }
`;

export const ColorsArea = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  :nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
