import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useUpdateEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const updateEvent = (id, data) => {
    setLoading(true);
    const loginId = localStorage.getItem("loginId");
    axios
      .put(`http://localhost:3001/api/v1/events/${id}`, {
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
      })
      .then((res) => {
        if (res.data.status === 200) {
          showNotify({ title: res.data.message, status: "success" });
          router.push("/eventEdit");
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: "error" });
        } else if (res.data.status === 422) {
          showNotify({ title: res.data.data.res_message, status: "error" });
        } else {
          showNotify({ title: "変更に失敗しました", status: "error" });
          console.log(res);
        }
      })
      .catch((error) => {
        showNotify({ title: "変更できません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { updateEvent, loading };
};
