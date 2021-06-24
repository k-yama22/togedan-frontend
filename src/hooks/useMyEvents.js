import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useMyEvents = () => {
  const { showNotify } = useNotify();
  const [myEvents, setMyEvents] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const getMyEvents = useCallback(() => {
    // setLoading(true);
    const loginId = localStorage.getItem("loginId");
    axios
      .get(`http://localhost:3001/api/v1/events/${loginId}/own`)
      .then((res) => {
        setMyEvents(res.data.data);
        console.log(res.data.data);
        console.log(myEvents);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);
  return { getMyEvents, myEvents };
};
