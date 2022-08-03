import styled from 'styled-components';

export const ComentsContainer = styled.section`
  display: flex;
  width: 98%;
  height: auto;
  padding: 20px;
  background-color: #212630;
  margin-top: 20px;
  flex-direction: column;
  border-radius: 6px;
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 25px;
    border-radius: 6px;
    padding: 10px;
    font-size: 17px;
  };

  .add_btn {
    width: 30%;
    padding: 5px;
    border-radius: 6px;
    margin-top: 10px;
    background-color: #08111C;
    color: white;
    font-size: 18px;
    margin-right: 10px;
  }
`;

export const CommentBody = styled.article`
  display: flex;
  width: 100%;
  background-color: #08111C;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
  border-radius:6px;
  height: auto;
  padding: 10px;
  h2{
    color: white;
    font-size: 18px;
    margin-bottom: 5px;
  }

`;

export const UserDataComent = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  
  button {
    color: white;
    background-color: #212630;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-size: 16px;
    margin-left: 10px;
    :hover {
      font-weight: 700;
    }
  }
`;
