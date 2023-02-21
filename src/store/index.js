import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  files: [],
  file: {},
  id: "",
  mark: null,
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

    setMark(state, payload){
    state.mark = payload
  },

    setId(state, payload) {
      state.id = payload
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

export const { setFiles, setEmpty, setFile, setFileEmpty,setFilesEmpty, setId, setMark } = ConfigSlice.actions;

export default ConfigSlice;