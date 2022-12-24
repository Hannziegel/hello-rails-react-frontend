import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET = 'hello-rails-react/GET_GREETINGS';
const API_URL = 'http://localhost:3001/greetings';

const initialState = {
  greetings: [],
  lifecycle: { loading: 'initial' },
};

export const getGreetings = createAsyncThunk(
  GET,
  async () => {
    const response = await fetch(`${API_URL}`);
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const greetingsReducer = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => ({
      greetings: action.payload[0].message,
      lifecycle: { loading: 'initial' },
    }))
      .addCase(getGreetings.pending, (state) => ({
        ...state,
        lifecycle: { loading: 'pending' },
      }))
      .addCase(getGreetings.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});
