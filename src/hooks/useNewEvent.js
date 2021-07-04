import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useNewEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const newEvent = (
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
      .post(`http://localhost:3001/api/v1/events`, {
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
        if (res.data.status === 200) {
          showNotify({ title: "登録完了しました", status: "success" });
          router.push("/newEvent");
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: "error" });
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
  return { newEvent, loading };
};
