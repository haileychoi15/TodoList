import React from 'react';
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem id="1" done text="2시 회의"></TodoItem>
            <TodoItem id="2" text="리액트 공부"></TodoItem>
            <TodoItem id="3" text="저녁 후 산책"></TodoItem>
        </TodoListBlock>
    );
}

export default TodoList;