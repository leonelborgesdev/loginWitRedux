import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const initialState = { obj: {} };

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    setObjUsuario: (state, action) => {
      state.obj = action.payload;
      console.log("action.payload", action.payload);
    },
  },
});

export const { setObjUsuario } = usuarioSlice.actions;

export const UserLogin = (usuario) => {
  return async function (dispatch) {
    console.log("entro UserLogin1");
    const response = await fetch(`${api}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    console.log("entro UserLogin2");
    if (response) {
      const data = await response.json();
      console.log("data", data);
      localStorage.setItem("Authorization", data.token);
      //   dispatch(setObjUsuario(usuario));
    }
  };
};
export const UserInfo = () => {
  return async function (dispatch) {
    const token = localStorage.getItem("Authorization");
    console.log("token", token);
    const response = await fetch(`${api}/user/userinfo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response) {
      const data = await response.json();
      console.log("dataUser", data);
    }
  };
};

export default usuarioSlice.reducer;
