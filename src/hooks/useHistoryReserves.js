import axios from "axios";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";

export const useHistoryReserves = () => {
  const { showNotify } = useNotify();
  const [historyReserves, setHistoryReserves] = useState([]);

  const getHistoryReserves = useCallback(() => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
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
