import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { authHeaders } from "src/hooks/authHeaders";
import {
  AUTH_URL,
  DELETE_ACCOUNT_ERROR,
  DELETE_ACCOUNT_FAILED,
  DELETE_ACCOUNT_SUCCESS,
  ERROR_STATUS,
  SUCCESS_STATUS,
} from "src/hooks/constants";

export const useDeleteAccount = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const deleteAccount = () => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .delete(AUTH_URL, {
        headers: headers,
      })
      .then((res) => {
        if (res.data) {
          lscache.remove("loginCheck");
          lscache.flush();
          showNotify({ title: DELETE_ACCOUNT_SUCCESS, status: SUCCESS_STATUS });
          router.push("/login");
        } else {
          showNotify({ title: DELETE_ACCOUNT_FAILED, status: ERROR_STATUS });
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          if (error.response.data.errors) {
            const errorMessages = error.response.data.errors.join("\n");
            showNotify({ title: errorMessages, status: ERROR_STATUS });
          } else {
            showNotify({ title: DELETE_ACCOUNT_ERROR, status: ERROR_STATUS });
          }
        } else {
          showNotify({ title: DELETE_ACCOUNT_ERROR, status: ERROR_STATUS });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { deleteAccount, loading };
};
