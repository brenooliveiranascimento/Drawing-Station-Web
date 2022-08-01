import styled from 'styled-components';

export const MaterialsContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    color: white;
    margin-top: 1rem;
  }
`;

export const MaterialArea = styled.article`
  display: flex;
  flex-direction: column;

  span {
    font-size: 20px;
  }
`;

export const MutipleColorArea = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;


  span {
    font-size: 20px;
  }
`;

export const ColorsArea = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 30px 30px;

`;
