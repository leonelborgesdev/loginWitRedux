import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../store/slices/Usuario";
import { useNavigate } from "react-router-dom";

export const LoginUser = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    await dispatch(UserLogin(usuario));
    navigate("/infoUser");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
    console.log(usuario);
  };
  return (
    <div>
      <div>
        <label>Nombre de Usuario</label>
        <input type="text" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
