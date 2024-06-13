import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from '../../axios'

export const fetchProds = createAsyncThunk('prods/fetchProds', async ()=>{
    const{data}=await axios.get('/prods');
    
    return data;
})
export const fetchCategory = createAsyncThunk('prods/fetchCategory', async ()=>{
    const{data}=await axios.get('/category/:id');
    
    return data;
})
// export const fetchTags = createAsyncThunk('posts/fetchTags', async ()=>{
//     const{data}=await axios.get('/tags');
//     return data;
// })



// const initialState = {
//     prods: {
//         items:[],
//         status:'loading',
//     },
//     // tags: {
//     //     items:[],
//     //     status:'loading',
//     // },
// };

const prodsSlice = createSlice({
    name: 'prods',
    initialState:{
        prods: {
            items:[],
            status:'loading',
        },
    },
    reducers:{},
    extraReducers: {
        [fetchProds.pending]:(state)=>{
            state.prods.items = [];
            state.prods.status='loading';
        },
        [fetchProds.fulfilled]:(state,action)=>{
            state.prods.items = action.payload;
            state.prods.status='loaded';
        },
        [fetchProds.rejected]:(state)=>{
            state.prods.items = [];
            state.prods.status='error';
        },

        [fetchCategory.pending]:(state)=>{
            state.prods.items = [];
            state.prods.status='loading';
        },
        [fetchCategory.fulfilled]:(state,action)=>{
            state.prods.items = action.payload;
            state.prods.status='loaded';
        },
        [fetchCategory.rejected]:(state)=>{
            state.prods.items = [];
            state.prods.status='error';
        },
        // [fetchTags.pending]:(state)=>{
        //     state.tags.items = [];
        //     state.tags.status='loading';
        // },
        // [fetchTags.fulfilled]:(state,action)=>{
        //     state.tags.items = action.payload;
        //     state.tags.status='loaded';
        // },
        // [fetchTags.rejected]:(state)=>{
        //     state.tags.items = [];
        //     state.tags.status='error';
        // },
    }
});


export const prodsReducer = prodsSlice.reducer;