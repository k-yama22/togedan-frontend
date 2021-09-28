import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import {
  COMMON_UPDATE_ERROR,
  ERROR_STATUS,
  MY_PAGE_SCREEN,
  PASSWORD_URL,
  SUCCESS_STATUS,
  UPDATE_FAILED,
  UPDATE_SUCCESS,
} from "src/utils/constants";
import { useNotify } from "src/hooks/useNotify";

export const usePassChange = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const passChange = (data) => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .put(
        PASSWORD_URL,
        {
          current_password: data.currentPassword,
          password: data.password,
          password_confirmation: data.confirmPassword,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          showNotify({ title: UPDATE_SUCCESS, status: SUCCESS_STATUS });
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
  return { passChange, loading };
};
