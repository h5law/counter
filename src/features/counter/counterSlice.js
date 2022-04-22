import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice ({
  name: 'counters',
  initialState: {
    counters: [],
  },
  reducers: {
    addCounter: (state, action) => {
      state.counters.push(action.payload);
    },
    removeCounter: (state, action) => {
      state.counters = state.counters.filter(counter => counter.id !== action.payload.id);
    },
    incrementCounter: (state, action) => {
      const indexToEdit = state.counters.findIndex(obj => obj.id === action.payload.id);
      state.counters[indexToEdit].value += 1;
    },
    decrementCounter: (state, action) => {
      const indexToEdit = state.counters.findIndex(obj => obj.id === action.payload.id);
      state.counters[indexToEdit].value -= 1;
    },
    resetCounter: (state, action) => {
      const indexToEdit = state.counters.findIndex(obj => obj.id === action.payload.id);
      state.counters[indexToEdit].value = 0;
    },
    changeTitle: (state, action) => {
      const indexToEdit = state.counters.findIndex(obj => obj.id === action.payload.id);
      state.counters[indexToEdit].title = action.payload.title;
    },
  },
});

export const {
  addCounter,
  removeCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
  changeTitle } = counterSlice.actions;

export default counterSlice.reducer;
