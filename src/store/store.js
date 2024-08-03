import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // pokemonsw: pokemonSlice,
    // [todosApi.reducerPath]: todosApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   // todosApi.middleware,
  // ],
});
