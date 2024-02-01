import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define an initial state
const initialState = [
    {
        title:'test',
    }
]

// Create a slice
const todoSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
  }
});

// Export the reducer and actions
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;