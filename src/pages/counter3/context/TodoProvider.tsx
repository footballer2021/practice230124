import React, { useReducer, createContext, useContext} from 'react'
import { TodoType, ActionType } from '../type/Type'

const TodoContext = createContext<TodoType[]>([]);
const TodoDispatchContext = createContext<React.Dispatch<ActionType>>(()=>{});

const todosList = [
  {
      id:Math.floor(Math.random()*1e5),
      content:"学習",
      editing:false
  },
  {
      id:Math.floor(Math.random()*1e5),
      content:"病院",
      editing:false
  },
  {
      id:Math.floor(Math.random()*1e5),
      content:"ウォーキング",
      editing:false
  },
]

const todoReducer = (todos:TodoType[], action:ActionType) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case "todo/update":
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    default:
      return todos;
  }
};

const TodoProvider = ({children}:{children:React.ReactNode}) => {
  const [todos, dispatch] = useReducer(todoReducer, todosList);
  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

const useTodos = () => useContext(TodoContext);
const useDispatchTodos = () => useContext(TodoDispatchContext);

export { TodoProvider, useTodos, useDispatchTodos}