import axios from "axios";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";
export const useSelectUser = () => {
  const { showNotify } = useNotify();
  const [selectedEvent, setSelectedEvent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onSelectEvent = (id) => {
    axios
      .get(`http://localhost:3001/api/v1/events/${id}`)
      .then((res) => {
        setSelectedEvent(res.data.data);
        showNotify({ title: "取得に成功しました", status: "SUCCESS" });
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
  };
  return { onSelectEvent, selectedEvent, showModal, setShowModal };
};
