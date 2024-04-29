import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "../../store/slices/Usuario";

export const InfoUser = () => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.usuario.obj);
  console.log(usuario);
  useEffect(() => {
    dispatch(UserInfo());
  }, []);
  return <div>{usuario.username}</div>;
};
