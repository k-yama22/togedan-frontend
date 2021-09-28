import axios from "axios";
import { useState } from "react";
import lscache from "lscache";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import {
  COMMON_SELECT_ERROR,
  ERROR_STATUS,
  USERS_URL,
} from "src/utils/constants";

export const useMyUserInfo = () => {
  const [myUserInfo, setMyUserInfo] = useState([]);
  const headers = authHeaders();
  const { showNotify } = useNotify();

  const getMyUserInfo = () => {
    const loginId = lscache.get("loginId");
    if (!loginId) {
      return;
    }
    axios
      .get(`${USERS_URL}/${loginId}`, {
        headers: headers,
      })
      .then((res) => {
        setMyUserInfo(res.data.data);
      })
      .catch(() => {
        showNotify({ title: COMMON_SELECT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return { getMyUserInfo, myUserInfo };
};
