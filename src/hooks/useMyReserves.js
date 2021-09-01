import axios from "axios";
import { useCallback, useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  COMMON_SELECT_ERROR,
  ERROR_STATUS,
  RESERVES_URL,
} from "src/hooks/constants";

export const useMyReserves = () => {
  const { showNotify } = useNotify();
  const [myReserves, setMyReserves] = useState([]);

  const getMyReserves = useCallback(() => {
    const loginId = lscache.get("loginId");
    const headers = authHeaders();
    axios
      .get(`${RESERVES_URL}/${loginId}/events`, {
        headers: headers,
      })
      .then((res) => {
        setMyReserves(res.data.data);
      })
      .catch(() => {
        showNotify({ title: COMMON_SELECT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getMyReserves, myReserves };
};
