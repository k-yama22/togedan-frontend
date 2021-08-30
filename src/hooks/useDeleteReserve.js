import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { RESERVES_URL } from "src/hooks/constants";

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
        showNotify({ title: res.data.message, status: "success" });
        router.push("/myReserves");
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { deleteMyReserves, deleteReserve };
};
