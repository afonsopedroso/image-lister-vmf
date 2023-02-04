import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  file: {},

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

// export const getData = createAsyncThunk('',
//   async(url) => {
//     try {
//       await fetch(url).then((response) => {
//         console.log(response.json())
//         response.json()})
//     }catch{
//       return
//     }
//     return
  
//   // const response = await fetch(url)
//   // await response.json().then((data) => {
//   //   dispatch
//   //   return data
//   // })
  
// } )



const ConfigSlice = createSlice({
  name: "Config",
  initialState: initialState,
  reducers: {
    setFiles(state, payload) {
      console.log(payload)
      state.files = [...state.files, payload];
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
      console.log(action.payload)
      state.files.push(action.payload)    })
  }
});

export const { setFiles, setEmpty, setFile, setFileEmpty } = ConfigSlice.actions;

export default ConfigSlice;