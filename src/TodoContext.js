import React, {createContext, useContext, useReducer, useRef} from 'react';

const initialTodos = [
    {
        id:1,
        text: '빨래 돌리기',
        done: true,
    },
    {
        id:2,
        text: '졸업장 찾아오기',
        done: true,
    },
    {
        id:3,
        text: '대면 멘토링 참석',
        done: false,
    },
    {
        id:4,
        text: '국민은행 카드 재발급',
        done: false,
    },
]


/*
  CREATE
  TOGGLE
  REMOVE
*/
function todoReducer(state, action) {
     switch (action.type) {
         case 'CREATE':
             return state.concat(action.todo);
         case 'TOGGLE':
             return state.map(
                 todo => todo.id === action.id
                     ? { ...todo, done: !todo.done}
                     : { ...todo}
             );
         case 'REMOVE':
             return state.filter(todo => todo.id !== action.id);
         default:
             throw new Error(`Unhandled action type: ${action.type}`);
     }
}

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(1);

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}