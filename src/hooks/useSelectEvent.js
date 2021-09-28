import axios from "axios";
import { useState } from "react";
import {
  COMMON_SELECT_ERROR,
  ERROR_STATUS,
  EVENTS_URL,
} from "src/utils/constants";
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
        console.log(res.data.data);
      })
      .catch(() => {
        showNotify({ title: COMMON_SELECT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
  };
  return { onSelectEvent, selectedEvent, showModal, setShowModal };
};
