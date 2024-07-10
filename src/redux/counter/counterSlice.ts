import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounterInitialState {
    value: number;
}

const initialState: ICounterInitialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
