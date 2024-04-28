import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const initialState = { obj: {} };

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    setObjUsuario: (state, action) => {
      state.obj = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setObjUsuario } = usuarioSlice.actions;

export const LoginUser = (usuario) => {
  return async function (dispatch) {
    const response = await fetch(`${api}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (response) {
      dispatch(setObjUsuario(usuario));
    }
  };
};

export default usuarioSlice.reducer;
