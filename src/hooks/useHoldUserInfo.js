import axios from "axios";
import lscache from "lscache";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import {
  COMMON_SELECT_ERROR,
  ERROR_STATUS,
  USERS_URL,
} from "src/utils/constants";
import { useNotify } from "src/hooks/useNotify";

export const useHoldUserInfo = () => {
  const [holdUserInfo, setMyUserInfo] = useState([]);
  const headers = authHeaders();
  const { showNotify } = useNotify();
  const loginId = lscache.get("loginId");

  const getHoldUserInfo = (id) => {
    if (!loginId) {
      return;
    }
    axios
      .get(`${USERS_URL}/${id}`, {
        headers: headers,
      })
      .then((res) => {
        setMyUserInfo(res.data.data);
      })
      .catch(() => {
        showNotify({ title: COMMON_SELECT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
  };
  return { getHoldUserInfo, holdUserInfo };
};
