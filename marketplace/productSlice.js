import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("products/fetch" , 
                    async () => {
                        const response = await fetch('https://api.escuelajs.co/api/v1/products');
                        return await response.json();
                    })

const productSlice = createSlice({
    name : "productSlice",
    initialState : {
        products : [],
        status : "idle"
    }, 
    reducers:{
        loadProducts : (state , action) => {
            state.products = action.payload
        }
    },
    extraReducers: function(builder){
        builder
            .addCase(fetchData.pending , (state , action) => {
                state.status = "Loading";
            })
            .addCase(fetchData.fulfilled , (state , action) => {
                state.products = action.payload;
                state.status = "success";
            })
            .addCase(fetchData.rejected , (state , action) => {
                state.status = "Failed";
            })
    }
})

export default productSlice.reducer;

export const {loadProducts} = productSlice.actions;