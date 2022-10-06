import { configureStore } from '@reduxjs/toolkit';
import financeSlice from './reducer';
import { apiSlice } from './apiSlice';

export const store = configureStore({
    reducer: {
        finance: financeSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});