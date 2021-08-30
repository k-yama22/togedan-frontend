import axios from "axios";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { USERS_URL } from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";

export const useHoldUserInfo = () => {
  const [holdUserInfo, setMyUserInfo] = useState([]);
  const headers = authHeaders();
  const { showNotify } = useNotify();

  const getHoldUserInfo = (id) => {
    axios
      .get(`${USERS_URL}/${id}`, {
        headers: headers,
      })
      .then((res) => {
        setMyUserInfo(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
  };
  return { getHoldUserInfo, holdUserInfo };
};
