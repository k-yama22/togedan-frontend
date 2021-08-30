import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { EVENTS_URL } from "src/hooks/constants";

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
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { deleteMyEvent, deleteEvent };
};
