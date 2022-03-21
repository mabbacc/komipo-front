// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getHierarchy = createAsyncThunk('main/getHierarchy', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/front/dashboard/hierarchy`)
  return {
    message: response.data.message,
    hierarchy: response.data.data
  }
})

export const hierarchySlice = createSlice({
  name: 'hierarchy',
  initialState: {
    loading: 'idle',
    currentRequestId: undefined,
    message: '',
    hierarchy: []
  },
  reducers: {
    handleOp: (state, action) => {
      state.query = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHierarchy.pending, (state, action) => {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      })
      .addCase(getHierarchy.fulfilled, (state, action) => {
        const { requestId } = action.meta
        if (state.loading === 'pending' && state.currentRequestId === requestId) {
          state.loading = 'idle'
          state.currentRequestId = undefined
          state.message = action.payload.message
          state.hierarchy = action.payload.hierarchy
        }
      })
  }
})

export const { handleOp } = hierarchySlice.actions

export default hierarchySlice.reducer