import axios from "axios";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";
export const useSelectReservedEvent = () => {
  const { showNotify } = useNotify();
  const [selectedEvent, setSelectedEvent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onSelectReservedEvent = (eventId) => {
    const loginId = localStorage.getItem("loginId");
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .post(
        `http://localhost:3001/api/v1/reserves/${eventId}/event`,
        {
          event_id: eventId,
          user_id: loginId,
          reserve_sts: "1",
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
  return { onSelectReservedEvent, selectedEvent, showModal, setShowModal };
};