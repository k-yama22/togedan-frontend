import axios from "axios";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  COMMON_SELECT_ERROR,
  ERROR_STATUS,
  EVENTS_URL,
} from "src/utils/constants";

export const useHistoryEvents = () => {
  const { showNotify } = useNotify();
  const [historyEvents, setHistoryEvents] = useState([]);

  const getHistoryEvents = useCallback(() => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .get(`${EVENTS_URL}/${loginId}/history`, {
        headers: headers,
      })
      .then((res) => {
        setHistoryEvents(res.data.data);
      })
      .catch(() => {
        showNotify({ title: COMMON_SELECT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getHistoryEvents, historyEvents };
};
