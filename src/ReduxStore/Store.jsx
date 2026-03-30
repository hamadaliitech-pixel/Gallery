import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/Countit'

export const store = configureStore({
  reducer: {counter: counterReducer,},
})