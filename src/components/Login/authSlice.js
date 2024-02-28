import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginAsync = createAsyncThunk(
    "login",
    async (details) => {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "login/password", {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }
        const data = await response.json();
        return data;
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.setItem("token", null);
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.token);
            state.user = action.payload.user;
            toast.success("Login Successful");
        })
        builder.addCase(loginAsync.rejected, (state, action) => {
            toast.error(action.error.message);
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;