import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const countData = createAsyncThunk("preloader/countData",    
    async (_,thunkAPI)=>{
        console.log(_);
        const data = await fetch(`https://mk7d8ghl.api.sanity.io/v2023-10-14/data/query/production?query=${_}`)
                            .then(res=>res.json());
        return data;
    }
)
export const fetchQueryBased = createAsyncThunk("preloader/queryBased",

    async(_,thunkAPI)=>{
    
        let data = await fetch(`https://mk7d8ghl.api.sanity.io/v2023-10-14/data/query/production?query=${_}`)
                     .then(res=>res.json());

        return data;

})

export const filterByTags = createAsyncThunk("preloader/filterTags",
    async(_,thunkAPI)=>{
        
        
        const data = await fetch(`https://mk7d8ghl.api.sanity.io/v2023-10-14/data/query/production?query=${_.nquery}`)
                            .then((res)=>res.json());

        console.log(data);
        return data;
    }
)

export const fetchDataStrapi = createAsyncThunk("preloader/getData",


    async (_, thunkAPI) => {
        
        let data = await fetch(`https://mk7d8ghl.api.sanity.io/v2023-10-14/data/query/production?query=*[_type=='Projects']{previewlink,Description,Title,sourcecodelink,Tags,buttoncolor,imageUrl,shortdesc,para}`)
                        .then(res=>res.json());

        return data;
    }
)

const dataSlice = createSlice({
    name: "preloader",
    initialState: { data: [], loading: true, value: 0, searchingStatus: false,size:0},
    reducers: {
        increment(state, action) {

            state.value += action.payload.value;
        },
        updateLoader(state) {
            state.loading = false;

        },
        updateSearchStatus(state, action) {

            state.searchingStatus = action.payload.val;
        },
        
    },

    extraReducers: (builder) => {
        builder.addCase(fetchDataStrapi.fulfilled, (state, action) => {

            state.data = action.payload;
            state.loading = false;
            
        })
        builder.addCase(fetchQueryBased.fulfilled,(state,action)=>{
            
            state.data = action.payload;
            state.searchingStatus = false;
        })
        builder.addCase(filterByTags.fulfilled,(state,action)=>{
            state.data = action.payload;
        })
        builder.addCase(countData.fulfilled,(state,action)=>{
            state.size = action.payload.result;
        })
    }
});

export const actions = dataSlice.actions;
export default dataSlice.reducer;