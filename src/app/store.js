import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../features/counter/counterSlice.js';

const store = configureStore({
  reducer: {
    counters: counterSlice,
  },
});

export default store;
