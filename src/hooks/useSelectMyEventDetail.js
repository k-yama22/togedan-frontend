import axios from "axios";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  COMMON_SELECT_ERROR,
  ERROR_STATUS,
  EVENTS_URL,
  SELECT_SUCCESS,
  SUCCESS_STATUS,
} from "src/hooks/constants";

export const useSelectMyEventDetail = () => {
  const { showNotify } = useNotify();
  const [selectedEvent, setSelectedEvent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onSelectMyEventDetail = (eventId) => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .post(
        `${EVENTS_URL}/${eventId}/detail`,
        {
          id: eventId,
          user_id: loginId,
          event_sts: "1",
        },
        { headers: headers }
      )
      .then((res) => {
        setSelectedEvent(res.data.data);
        showNotify({ title: SELECT_SUCCESS, status: SUCCESS_STATUS });
      })
      .catch(() => {
        showNotify({ title: COMMON_SELECT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
  };
  return { onSelectMyEventDetail, selectedEvent, showModal, setShowModal };
};
