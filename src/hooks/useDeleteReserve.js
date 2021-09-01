import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  COMMON_DELETE_ERROR,
  ERROR_STATUS,
  RESERVES_URL,
  SUCCESS_STATUS,
} from "src/hooks/constants";

export const useDeleteReserve = () => {
  const { showNotify } = useNotify();
  const router = useRouter();
  const [deleteReserve, setDeleteReserve] = useState([]);
  const deleteMyReserves = useCallback((id) => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .post(
        `${RESERVES_URL}/${id}/cancel`,
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
        showNotify({ title: res.data.message, status: SUCCESS_STATUS });
        router.push("/myReserves");
      })
      .catch(() => {
        showNotify({ title: COMMON_DELETE_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { deleteMyReserves, deleteReserve };
};
