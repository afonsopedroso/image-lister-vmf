import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  files: [],
  file: {},
  id: "",
  mark: null,
  scrollPos: null
};

export const getData = createAsyncThunk('',
async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(payload)
      
      return response.json() // Return a value synchronously using Async-await
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response)
    }
  }
);



const ConfigSlice = createSlice({
  
  name: "Config",
  initialState: initialState,
  reducers: {
    setFiles(state, payload) {
      state.files = [...state.files, payload];
    },

    setMark(state, payload){
    state.mark = payload
  },

    setId(state, payload) {
      state.id = payload
    },

    setScrollPos(state, payload) {
      state.scrollPos = payload
    },
  
    setFilesEmpty(state, payload) {
      state.files = []
    },

    setFile(state, payload) {
      state.file = payload;
    },

    setFileEmpty(state){
      state.file = {};
    },   
  
    setEmpty(state) {
      state.files = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      let act = action.payload.images.filter((item) => item.includes(state.id.payload))
      action.payload.images = act   
      state.files = action.payload
    
    })
  }
});

export const { setFiles, setEmpty, setFile, setFileEmpty,setFilesEmpty, setId, setMark, setScrollPos } = ConfigSlice.actions;

export default ConfigSlice;