import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from '../../axios'

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (params)=>{
    const{data}=await axios.post('/search', params);
    
    return data;
})




const searchsSlice = createSlice({
    name: 'searchs',
    initialState:{
        searchs: {
            items:[],
            status:'loading',
        },
    },
    reducers:{},
    extraReducers: {
        [fetchSearch.pending]:(state)=>{
            state.searchs.items = [];
            state.searchs.status='loading';
        },
        [fetchSearch.fulfilled]:(state,action)=>{
            state.searchs.items = action.payload;
            state.searchs.status='loaded';
        },


        [fetchSearch.rejected]:(state)=>{
            state.searchs.items = [];
            state.searchs.status='error';
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
export const selectSearch = state => Boolean(state.searchs.searchs.items);

export const searchReducer = searchsSlice.reducer;