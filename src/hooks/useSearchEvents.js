import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";

export const useSearchEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);
  const [searchEvents, setSearchEvents] = useState({});

  const searchEvent = (genre, location, eventDate, startTime, endTime) => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .post(
        `http://localhost:3001/api/v1/events/search`,
        {
          genre: genre,
          location: location,
          event_date: eventDate,
          start_time: startTime,
          end_time: endTime,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data.status === 200) {
          showNotify({ title: res.data.message, status: "success" });
          setSearchEvents(res.data.data);
          router.push("/events");
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: "error" });
        } else if (res.data.status === 422) {
          showNotify({ title: res.data.data.res_message, status: "error" });
        } else {
          showNotify({ title: "登録に失敗しました", status: "error" });
        }
      })
      .catch(() => {
        showNotify({ title: "登録できません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { searchEvent, searchEvents, loading };
};
