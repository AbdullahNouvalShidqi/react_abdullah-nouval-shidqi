import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import TodosAPI from "../../apis/todos.api";

export const fetchTodos = createAsyncThunk("fetch/todos", async () => {
    try{
        const response = await TodosAPI.getTodos();
        return response.data.todosDatabase_todosList;
    } catch(err){
        console.log(err);
    }
});

const initialState = {
    data: [],
    status: "idle",
    error: null
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        tambahTodos: (state, action) => {
            const newTodosToAdd = {
                id: uuidv4(), ...action.payload, 
            }
    
            state.data = [...state.data, newTodosToAdd];
        },
        hapusTodos: (state, action) => {
            state.data = state.data.filter((item) =>  item.id !== action.payload);
        },
        ubahStatusTodos: (state, action) => {
            const index = state.data.findIndex(data => data.id === action.payload);

            if(index !== -1){
                state.data[index].completed = !state.data[index].completed;
            }
        }
    },
    extraReducers(builder){
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = "succeded";
            state.data = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const { tambahTodos, hapusTodos, ubahStatusTodos } = todosSlice.actions;
export default todosSlice.reducer;