import styled from 'styled-components';

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SideContent = styled.aside`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #212630;
  align-items: center;
  color: #fff;
`;

export const SideSearch = styled.input`
  background-color: #08111C;
  width: 100%;
  border-radius: 3px;
  padding: 5px;
  color: #aaa;
  text-decoration: none;
`;

export const Divise = styled.section`
  width: 100%;
  height: 0.2px;
  margin: 20px;
  background-color: #aaa;
`;

export const ModulesNameContent = styled.button`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: #08111C;
  margin-top: 10px;
  font-size: 16px;
`;

export const Exercicelist = styled.ul`
  padding: 20px;
  padding-top: 7px;
  display: flex;
  flex-direction: column;

  button {
    background-color: #08111C;
  }
`;

export const ExerciceListItem = styled.li`
  display: flex;
  margin-top: 10px;
  background-color: ${({ color }: any) => color};
  border-radius: 3px;
  padding: 10px;
  width: auto;
  align-items: center;
  justify-content: flex-start;

  .check_icon_check {
    color: #12843e;
    align-self: center;
    justify-self: center;
    margin-bottom: -2px;
    margin-right: 2px;
  }

  .check_icon_no_check {
    color: #ff4242;
    align-self: center;
    justify-self: center;
    margin-bottom: -2px;
    margin-right: 2px;
  }

  span {
    font-size: 16px;
  }
`;
