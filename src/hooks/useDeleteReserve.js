import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useDeleteReserve = () => {
  const { showNotify } = useNotify();
  const [deleteReserve, setDeleteReserve] = useState([]);
  const deleteMyReserves = useCallback((id) => {
    // const { id } = props;
    const loginId = localStorage.getItem("loginId");
    axios
      .post(`http://localhost:3001/api/v1/reserves/${id}/cancel`, {
        user_id: loginId,
        event_id: id,
      })
      .then((res) => {
        setDeleteReserve(res.data.data);
        console.log(res.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
  }, []);
  return { deleteMyReserves, deleteReserve };
};
