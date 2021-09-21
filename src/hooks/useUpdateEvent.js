import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  COMMON_UPDATE_ERROR,
  ERROR_STATUS,
  EVENTS_URL,
  EVENT_STATUS_VALID,
  SUCCESS_STATUS,
  UPDATE_FAILED,
} from "src/hooks/constants";

export const useUpdateEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const updateEvent = (id, data) => {
    setLoading(true);
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .put(
        `${EVENTS_URL}/${id}`,
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
          router.push({
            pathname: "/eventEdit",
            query: { id: id },
          });
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: ERROR_STATUS });
        } else if (res.data.status === 422) {
          showNotify({
            title: res.data.data.res_message,
            status: ERROR_STATUS,
          });
        } else {
          showNotify({ title: UPDATE_FAILED, status: ERROR_STATUS });
          console.log(res);
        }
      })
      .catch(() => {
        showNotify({ title: COMMON_UPDATE_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { updateEvent, loading };
};
