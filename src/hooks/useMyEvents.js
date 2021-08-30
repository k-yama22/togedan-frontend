import axios from "axios";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { EVENTS_URL } from "src/hooks/constants";

export const useMyEvents = () => {
  const { showNotify } = useNotify();
  const [myEvents, setMyEvents] = useState([]);
  const getMyEvents = useCallback(() => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .get(`${EVENTS_URL}/${loginId}/own`, {
        headers: headers,
      })
      .then((res) => {
        setMyEvents(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getMyEvents, myEvents };
};
