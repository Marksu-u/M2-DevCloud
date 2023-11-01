import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const TasksList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ccc;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 5px;
`;

export const AddButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
`;
