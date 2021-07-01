import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useDeleteEvent = () => {
  const { showNotify } = useNotify();
  const [deleteEvent, setDeleteEvent] = useState([]);
  const deleteMyEvent = useCallback((id) => {
    // const { id } = props;
    const loginId = localStorage.getItem("loginId");
    axios
      .post(`http://localhost:3001/api/v1/events/${id}/cancel`, {
        user_id: loginId,
        id: id,
      })
      .then((res) => {
        setDeleteEvent(res.data.data);
        console.log(res.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
  }, []);
  return { deleteMyEvent, deleteEvent };
};
