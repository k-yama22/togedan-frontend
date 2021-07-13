import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useSearchEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);
  const [searchEvents, setSearchEvents] = useState({});

  const searchEvent = (genre, location, eventDate) => {
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
        `http://localhost:3001/api/v1/events/${loginId}/search`,
        { genre: genre, location: location, event_date: eventDate },
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
      .catch((error) => {
        showNotify({ title: "登録できません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { searchEvent, searchEvents, loading };
};
