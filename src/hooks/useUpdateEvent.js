import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";

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
        `http://localhost:3001/api/v1/events/${id}`,
        {
          user_id: loginId,
          event_name: data.eventName,
          genre: data.genre,
          location: data.location,
          event_date: data.eventDate,
          start_time: data.startTime,
          end_time: data.endTime,
          event_message: data.eventMessage,
          max_people: data.maxPeople,
          event_sts: "1",
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data.status === 200) {
          showNotify({ title: res.data.message, status: "success" });
          router.push({
            pathname: "/eventEdit",
            query: { id: id },
          });
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: "error" });
        } else if (res.data.status === 422) {
          showNotify({ title: res.data.data.res_message, status: "error" });
        } else {
          showNotify({ title: "変更に失敗しました", status: "error" });
          console.log(res);
        }
      })
      .catch(() => {
        showNotify({ title: "変更できません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { updateEvent, loading };
};
