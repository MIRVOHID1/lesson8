import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ICategory {
    id: number;
    name: string;
}

interface ICategoryInitialState {
    value: ICategory[];
}

const initialState: ICategoryInitialState = {
    value: [],
};

export const fetchCategories: any = createAsyncThunk(
    "category/fetchCategories",
    async () => {
        const response = await axios.get("https://ecommerce-backend-fawn-eight.vercel.app/api/categories");
        return response.data;
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
            state.value = action.payload;
        });
    }
});

export default categorySlice.reducer;
