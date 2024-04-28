import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./slices/Usuario";

export default configureStore({
  reducer: {
    usuario: usuarioReducer,
  },
});
