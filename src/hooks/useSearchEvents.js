import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import {
  COMMON_SELECT_ERROR,
  ERROR_STATUS,
  EVENTS_SCREEN,
  EVENTS_SEARCH_URL,
  SELECT_FAILED,
  SUCCESS_STATUS,
} from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";

export const useSearchEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);
  const [searchEvents, setSearchEvents] = useState({});

  const searchEvent = (data) => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .post(
        EVENTS_SEARCH_URL,
        {
          genre: data.genre,
          location: data.location,
          event_date: data.eventDate,
          start_time: data.startTime,
          end_time: data.endTime,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data.status === 200) {
          showNotify({ title: res.data.message, status: SUCCESS_STATUS });
          setSearchEvents(res.data.data);
          router.push(EVENTS_SCREEN);
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: ERROR_STATUS });
        } else if (res.data.status === 422) {
          showNotify({
            title: res.data.data.res_message,
            status: ERROR_STATUS,
          });
        } else {
          showNotify({ title: SELECT_FAILED, status: ERROR_STATUS });
        }
      })
      .catch(() => {
        showNotify({ title: COMMON_SELECT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { searchEvent, searchEvents, loading };
};
