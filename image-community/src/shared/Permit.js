import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./firebase";

// 세션 체크를 모듈로 만들어서 한번에 쓰자.
const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_session && is_login) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};

export default Permit;
