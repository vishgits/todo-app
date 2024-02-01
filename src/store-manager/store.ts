import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../store-manager/todo/reducer'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
})

export default store