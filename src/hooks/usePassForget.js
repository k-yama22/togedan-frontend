import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  ERROR_STATUS,
  LOGIN_SCREEN,
  PASSWORD_RESET_ERROR,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_URL,
  SUCCESS_STATUS,
} from "src/utils/constants";
import { useNotify } from "src/hooks/useNotify";

export const usePassForget = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const passForget = (passForgetData) => {
    setLoading(true);
    axios
      .post(PASSWORD_URL, passForgetData)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          showNotify({
            title: PASSWORD_RESET_SUCCESS,
            status: SUCCESS_STATUS,
          });
          router.push(LOGIN_SCREEN);
        } else {
          showNotify({
            title: PASSWORD_RESET_FAILED,
            status: ERROR_STATUS,
          });
        }
      })
      .catch(() => {
        showNotify({ title: PASSWORD_RESET_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { passForget, loading };
};
