import axios from "axios";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";

export const useMyReserves = () => {
  const { showNotify } = useNotify();
  const [myReserves, setMyReserves] = useState([]);

  const getMyReserves = useCallback(() => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getMyReserves, myReserves };
};
