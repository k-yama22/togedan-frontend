import axios from "axios";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  COMMON_SELECT_ERROR,
  ERROR_STATUS,
  RESERVES_URL,
  RESERVE_STATUS_VALID,
} from "src/utils/constants";

export const useSelectReservedEvent = () => {
  const { showNotify } = useNotify();
  const [selectedEvent, setSelectedEvent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onSelectReservedEvent = (eventId) => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .post(
        `${RESERVES_URL}/${eventId}/event`,
        {
          event_id: eventId,
          user_id: loginId,
          reserve_sts: RESERVE_STATUS_VALID,
        },
        { headers: headers }
      )
      .then((res) => {
        setSelectedEvent(res.data.data);
      })
      .catch(() => {
        showNotify({ title: COMMON_SELECT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
  };
  return { onSelectReservedEvent, selectedEvent, showModal, setShowModal };
};
