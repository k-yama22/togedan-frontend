import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useMyReserves = () => {
  const { showNotify } = useNotify();
  const [myReserves, setMyReserves] = useState([]);

  const getMyReserves = useCallback(() => {
    const loginId = localStorage.getItem("loginId");
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .get(`http://localhost:3001/api/v1/reserves/${loginId}/events`, {
        headers: headers,
      })
      .then((res) => {
        setMyReserves(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
  }, []);
  return { getMyReserves, myReserves };
};
