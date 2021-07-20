import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useDeleteEvent = () => {
  const { showNotify } = useNotify();
  const [deleteEvent, setDeleteEvent] = useState([]);
  const deleteMyEvent = useCallback((id) => {
    const loginId = localStorage.getItem("loginId");
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .post(
        `http://localhost:3001/api/v1/events/${id}/cancel`,
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
        console.log(res.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { deleteMyEvent, deleteEvent };
};
