import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { authHeaders } from "src/hooks/authHeaders";
import {
  COMMON_CREATE_ERROR,
  CREATE_FAILED,
  ERROR_STATUS,
  EVENTS_URL,
  EVENT_STATUS_VALID,
  MY_EVENTS_SCREEN,
  SUCCESS_STATUS,
} from "src/utils/constants";

export const useNewEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const newEvent = (data) => {
    setLoading(true);
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .post(
        EVENTS_URL,
        {
          user_id: loginId,
          event_name: data.eventName,
          genre: data.genre,
          location: data.location,
          event_date: data.eventDate + 1000 * 60 * 60 * 9,
          start_time: data.startTime,
          end_time: data.endTime,
          event_message: data.eventMessage,
          max_people: data.maxPeople,
          event_sts: EVENT_STATUS_VALID,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data.status === 200) {
          showNotify({ title: res.data.message, status: SUCCESS_STATUS });
          console.log(res.data);
          router.push(MY_EVENTS_SCREEN);
        } else if (res.data.status === 400) {
          const errorMessages = res.data.data.join("\n");
          showNotify({ title: errorMessages, status: ERROR_STATUS });
        } else if (res.data.status === 422) {
          showNotify({ title: res.data.message, status: ERROR_STATUS });
        } else {
          showNotify({ title: CREATE_FAILED, status: ERROR_STATUS });
        }
      })
      .catch(() => {
        showNotify({ title: COMMON_CREATE_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { newEvent, loading };
};
