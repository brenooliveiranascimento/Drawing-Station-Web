import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: auto;
  justify-content: space-between;
  h1 {
    font-size: 27px;
    margin-bottom: -1rem;
  }
`;

export const HandleBtn = styled.button`
  display: none;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #212630;
  color:white;
  padding: 10px;
  margin-bottom: -20px;
  font-size: 18px;
  margin-right: 15px;
  @media screen and (max-width: 1300px){
    display: flex;
  }
`;
