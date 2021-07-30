import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useNewEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const newEvent = (data) => {
    setLoading(true);
    const loginId = localStorage.getItem("loginId");
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .post(
        `http://localhost:3001/api/v1/events`,
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
          router.push("/newEvent");
        } else if (res.data.status === 400) {
          const elements = res.data.data.join("\n");
          showNotify({ title: elements, status: "error" });
        } else if (res.data.status === 422) {
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
