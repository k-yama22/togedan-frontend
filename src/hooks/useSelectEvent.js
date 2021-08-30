import axios from "axios";
import { useState } from "react";
import { EVENTS_URL } from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";
export const useSelectEvent = () => {
  const { showNotify } = useNotify();
  const [selectedEvent, setSelectedEvent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onSelectEvent = (id) => {
    axios
      .get(`${EVENTS_URL}/${id}`)
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
