import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialValue = [
    {
        id: uuidv4(),
        title: "Mengerjakan Exercise",
        completed: true,
    },
    {
        id: uuidv4(),
        title: "Mengerjakan Assignment",
        completed: false,
    },
]

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: initialValue,
    },
    reducers: {
        tambahTodos: (state, action) => {
            const newTodosToAdd = {
                id: uuidv4(), ...action.payload, 
            }
    
            state.todos = [...state.todos, newTodosToAdd];
        },
        hapusTodos: (state, action) => {
            state.todos = state.todos.filter((item) =>  item.id !== action.payload);
        },
        ubahStatusTodos: (state, action) => {
            const index = state.todos.findIndex(data => data.id === action.payload);

            if(index !== -1){
                state.todos[index].completed = !state.todos[index].completed;
            }
        }
    }
});

export const { tambahTodos, hapusTodos, ubahStatusTodos } = todosSlice.actions;
export default todosSlice.reducer;