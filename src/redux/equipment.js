// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getEquipment = createAsyncThunk('main/getEquipment', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/front/dashboard/equipment`)
  return {
    message: response.data.message,
    equipment: response.data.data
  }
})

export const equipmentSlice = createSlice({
  name: 'equipment',
  initialState: {
    loading: 'idle',
    currentRequestId: undefined,
    message: '',
    equipment: []
  },
  reducers: {
    handleOp: (state, action) => {
      state.query = action.payload
    }
  },  
  extraReducers: (builder) => {
    builder
      .addCase(getEquipment.pending, (state, action) => {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      })
      .addCase(getEquipment.fulfilled, (state, action) => {
        const { requestId } = action.meta
        if (state.loading === 'pending' && state.currentRequestId === requestId) {
          state.loading = 'idle'
          state.currentRequestId = undefined
          state.message = action.payload.message
          state.equipment = action.payload.equipment
        }
      })
  }
})

export const { handleOp } = equipmentSlice.actions

export default equipmentSlice.reducer
