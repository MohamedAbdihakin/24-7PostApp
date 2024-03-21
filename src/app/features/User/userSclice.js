import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
}

export const userSlice = createSlice({ // Corrected naming convention: userSlice
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    fullInfo: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
})

export const { fullInfo, setLoading, setError, logout } = userSlice.actions;

export default userSlice.reducer;
