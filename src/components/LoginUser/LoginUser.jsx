import React, { useState } from "react";

export const LoginUser = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {};
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
        <input type="password" />
      </div>
      <button>Login</button>
    </div>
  );
};
