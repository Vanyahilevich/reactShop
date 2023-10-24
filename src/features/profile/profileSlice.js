import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  "id": "",
  "username": "",
  "surname": "",
  "email": "",
  "password": "",
  "imageURL": ""
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    update: (state, action) => {
      state.id = action.payload.id
      state.username = action.payload.username
      state.surname = action.payload.surname
      state.email = action.payload.email
      state.password = action.payload.password
      state.imageURL = action.payload.imageURL
    },
    deleteProfile: (state) => {
      state.id = ""
      state.username = ""
      state.surname = ""
      state.email = ""
      state.password = ""
    }
  },
})

export const { update , deleteProfile } = profileSlice.actions

export default profileSlice.reducer
