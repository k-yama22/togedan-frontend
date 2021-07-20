import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useMyEvents = () => {
  const { showNotify } = useNotify();
  const [myEvents, setMyEvents] = useState([]);
  const getMyEvents = useCallback(() => {
    const loginId = localStorage.getItem("loginId");
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .get(`http://localhost:3001/api/v1/events/${loginId}/own`, {
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
