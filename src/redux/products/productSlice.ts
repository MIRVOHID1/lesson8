import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface IProduct {
    id: number;
    name: string;
}

interface IProductInitialState {
    value: IProduct[];
}

const initialState: IProductInitialState = {
    value: [],
};

export const fetchProducts: any = createAsyncThunk("category/fetchCategories",async () => {
        const response = await axios.get("https://ecommerce-backend-fawn-eight.vercel.app/api/products");
        return response.data;
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.value = action.payload;
        });
    }
});

export default productSlice.reducer;
