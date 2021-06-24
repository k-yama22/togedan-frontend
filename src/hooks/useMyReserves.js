import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useMyReserves = () => {
  const { showNotify } = useNotify();
  const [myReserves, setMyReserves] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const getMyReserves = useCallback(() => {
    // setLoading(true);
    const loginId = localStorage.getItem("loginId");
    axios
      .get(`http://localhost:3001/api/v1/reserves/${loginId}/events`)
      .then((res) => {
        setMyReserves(res.data.data);
      })
      .catch(() => {
        showNotify({ title: "取得できませんでした", status: "error" });
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);
  return { getMyReserves, myReserves };
};
