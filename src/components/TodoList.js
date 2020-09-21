import React from 'react';
import styled from "styled-components";
import TodoItem from "./TodoItem";
import {useTodoState} from "../TodoContext";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px;
    overflow-y: auto;
`;

function TodoList() {
    const state = useTodoState();
    console.log(state);
    return (
        <TodoListBlock>
            <TodoItem done text="2시 회의"></TodoItem>
            <TodoItem text="리액트 공부"></TodoItem>
            <TodoItem text="저녁 후 산책"></TodoItem>
        </TodoListBlock>
    );
}

export default TodoList;