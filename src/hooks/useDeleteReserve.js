import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useDeleteReserve = () => {
  const { showNotify } = useNotify();
  const [deleteReserve, setDeleteReserve] = useState([]);
  const deleteMyReserves = useCallback((id) => {
    const loginId = localStorage.getItem("loginId");
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .post(
        `http://localhost:3001/api/v1/reserves/${id}/cancel`,
        {
          user_id: loginId,
          event_id: id,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        setDeleteReserve(res.data.data);
        showNotify({ title: res.data.message, status: "success" });
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { deleteMyReserves, deleteReserve };
};
