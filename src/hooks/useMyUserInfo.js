import axios from "axios";
import { useState } from "react";
import lscache from "lscache";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import { USERS_URL } from "src/hooks/constants";

export const useMyUserInfo = () => {
  const [myUserInfo, setMyUserInfo] = useState([]);
  const headers = authHeaders();
  const { showNotify } = useNotify();

  const getMyUserInfo = () => {
    const loginId = lscache.get("loginId");
    axios
      .get(`${USERS_URL}/${loginId}`, {
        headers: headers,
      })
      .then((res) => {
        setMyUserInfo(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return { getMyUserInfo, myUserInfo };
};
