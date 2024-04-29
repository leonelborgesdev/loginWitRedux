import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserInfo } from "../../store/slices/Usuario";

export const InfoUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserInfo());
  }, []);
  return <div>InfoUser</div>;
};
