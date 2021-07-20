import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useHistoryEvents = () => {
  const { showNotify } = useNotify();
  const [historyEvents, setHistoryEvents] = useState([]);

  const getHistoryEvents = useCallback(() => {
    const loginId = localStorage.getItem("loginId");
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .get(`http://localhost:3001/api/v1/events/${loginId}/history`, {
        headers: headers,
      })
      .then((res) => {
        setHistoryEvents(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getHistoryEvents, historyEvents };
};
