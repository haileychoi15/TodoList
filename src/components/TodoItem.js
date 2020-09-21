import React from 'react';
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const CheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  margin-right: 20px;
  font-size: 24px;
  cursor: pointer;
  ${props => props.done && css`
     border: 1px solid #38d9a9;
     color: #38d9a9;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => props.done && css`
     color: #ced4da;
  `}
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Remove} {
       opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove><MdDelete /></Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;