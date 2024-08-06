import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { JournalAppSlice } from './journal';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: JournalAppSlice.reducer,
    // [todosApi.reducerPath]: todosApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   // todosApi.middleware,
  // ],
});
