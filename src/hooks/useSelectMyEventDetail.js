import axios from "axios";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
export const useSelectMyEventDetail = () => {
  const { showNotify } = useNotify();
  const [selectedEvent, setSelectedEvent] = useState({});
  const [showModal, setShowModal] = useState(false);
  import lscache from "lscache";

  const onSelectMyEventDetail = (eventId) => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .post(
        `http://localhost:3001/api/v1/events/${eventId}/detail`,
        {
          id: eventId,
          user_id: loginId,
          event_sts: "1",
        },
        { headers: headers }
      )
      .then((res) => {
        setSelectedEvent(res.data.data);
        showNotify({ title: "取得に成功しました", status: "SUCCESS" });
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
  };
  return { onSelectMyEventDetail, selectedEvent, showModal, setShowModal };
};
