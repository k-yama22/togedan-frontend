import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useUpdateEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const updateEvent = (
    id,
    eventName,
    genre,
    location,
    eventDate,
    startTime,
    endTime,
    eventMessage,
    maxPeople
  ) => {
    setLoading(true);
    const loginId = localStorage.getItem("loginId");
    axios
      .put(`http://localhost:3001/api/v1/events/${id}`, {
        user_id: loginId,
        event_name: eventName,
        genre: genre,
        location: location,
        event_date: eventDate,
        start_time: startTime,
        end_time: endTime,
        event_message: eventMessage,
        max_people: maxPeople,
        event_sts: "1",
      })
      .then((res) => {
        if (res.data) {
          showNotify({ title: "変更完了しました", status: "success" });
          router.push("/eventEdit");
        } else {
          showNotify({ title: "変更に失敗しました", status: "error" });
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
