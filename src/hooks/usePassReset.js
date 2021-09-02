import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  COMMON_UPDATE_ERROR,
  ERROR_STATUS,
  PASSWORD_URL,
  SUCCESS_STATUS,
  UPDATE_FAILED,
  UPDATE_SUCCESS,
} from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";

export const usePassReset = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const passReset = (data, accessToken, client, uid) => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      "access-token": accessToken,
      client: client,
      uid: uid,
    };
    axios
      .put(
        PASSWORD_URL,
        {
          password: data.password,
          password_confirmation: data.confirmPassword,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          showNotify({ title: UPDATE_SUCCESS, status: SUCCESS_STATUS });
          router.push("/login");
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
  return { passReset, loading };
};
