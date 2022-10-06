import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    transaction: []
};

export const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        getTransactions: (state) => {

        }
    }
});

export const { getTransactions } = financeSlice.actions;
export default financeSlice.reducer;