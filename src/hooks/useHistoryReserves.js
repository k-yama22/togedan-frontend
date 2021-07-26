import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useHistoryReserves = () => {
  const { showNotify } = useNotify();
  const [historyReserves, setHistoryReserves] = useState([]);

  const getHistoryReserves = useCallback(() => {
    const loginId = localStorage.getItem("loginId");
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .get(`http://localhost:3001/api/v1/reserves/${loginId}/history`, {
        headers: headers,
      })
      .then((res) => {
        setHistoryReserves(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getHistoryReserves, historyReserves };
};
