import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useAllEvents = () => {
  const { showNotify } = useNotify();
  const [events, setEvents] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const getEvents = useCallback(() => {
    // setLoading(true);
    axios
      .get("http://localhost:3001/api/v1/events")
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);
  return { getEvents, events };
};
