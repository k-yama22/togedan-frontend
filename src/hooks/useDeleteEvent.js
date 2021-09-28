import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  COMMON_DELETE_ERROR,
  ERROR_STATUS,
  EVENTS_URL,
} from "src/utils/constants";

export const useDeleteEvent = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [deleteEvent, setDeleteEvent] = useState([]);
  const deleteMyEvent = useCallback((id) => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .post(
        `${EVENTS_URL}/${id}/cancel`,
        {
          user_id: loginId,
          id: id,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        setDeleteEvent(res.data.data);
        router.reload();
      })
      .catch(() => {
        showNotify({ title: COMMON_DELETE_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { deleteMyEvent, deleteEvent };
};
