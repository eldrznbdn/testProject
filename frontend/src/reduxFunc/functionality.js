import { createSlice } from '@reduxjs/toolkit';

export const funcSlice = createSlice({
    name: "functions",
    initialState: { value: false },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setIsLoggedIn } = funcSlice.actions;


export default funcSlice.reducer;