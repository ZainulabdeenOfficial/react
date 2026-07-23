import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, title: "Learn React"}],
}

export const todoSlice = createSlice({
    name : 'todos',
    initialState,
})