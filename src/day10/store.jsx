import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  show: true,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1
    },
    decrement(state) {
      state.counter -= 1
    },
    incrementByAmount(state, action) {
      state.counter += action.payload
    },
    toggleShow(state) {
      state.show = !state.show
    },
  },
})

export const counterActions = counterSlice.actions

const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
  },
})

export default store
