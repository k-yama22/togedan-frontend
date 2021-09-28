import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  AUTH_URL,
  COMMON_UPDATE_ERROR,
  ERROR_STATUS,
  MY_PAGE_SCREEN,
  SUCCESS_STATUS,
  UPDATE_FAILED,
  UPDATE_SUCCESS,
} from "src/utils/constants";

export const useUserChange = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const userChange = (editData) => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .put(AUTH_URL, editData, { headers: headers })
      .then((res) => {
        if (res.data) {
          showNotify({ title: UPDATE_SUCCESS, status: SUCCESS_STATUS });
          lscache.set("loginImg", res.data.data.image, 100);
          router.push(MY_PAGE_SCREEN);
        } else {
          showNotify({ title: UPDATE_FAILED, status: ERROR_STATUS });
        }
      })
      .catch(() => {
        showNotify({ title: COMMON_UPDATE_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { userChange, loading };
};
