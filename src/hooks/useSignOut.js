import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  ERROR_STATUS,
  LOGOUT_URL,
  SIGN_OUT_ERROR,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESS,
  SUCCESS_STATUS,
} from "src/hooks/constants";

export const useSignOut = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const signOut = () => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .delete(LOGOUT_URL, {
        headers: headers,
      })
      .then((res) => {
        if (res.data) {
          lscache.remove("loginCheck");
          lscache.flush();
          showNotify({ title: SIGN_OUT_SUCCESS, status: SUCCESS_STATUS });
          router.push("/login");
        } else {
          showNotify({ title: SIGN_OUT_FAILED, status: ERROR_STATUS });
        }
      })
      .catch(() => {
        showNotify({ title: SIGN_OUT_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { signOut, loading };
};
