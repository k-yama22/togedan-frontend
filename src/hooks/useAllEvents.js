import axios from "axios";
import { useCallback, useState } from "react";
import { EVENTS_URL } from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";

export const useAllEvents = () => {
  const { showNotify } = useNotify();
  const [events, setEvents] = useState([]);
  const getEvents = useCallback(() => {
    axios
      .get(EVENTS_URL)
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getEvents, events, setEvents };
};
