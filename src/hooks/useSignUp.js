import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AUTH_URL,
  ERROR_STATUS,
  SIGN_UP_ERROR,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
  SUCCESS_STATUS,
  TEMP_REGISTRATION_SCREEN,
} from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";

export const useSignUp = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const signUp = (signUpData) => {
    setLoading(true);
    axios
      .post(AUTH_URL, signUpData)
      .then((res) => {
        if (res.data) {
          showNotify({ title: SIGN_UP_SUCCESS, status: SUCCESS_STATUS });
          router.push(TEMP_REGISTRATION_SCREEN);
        } else {
          showNotify({ title: SIGN_UP_FAILED, status: ERROR_STATUS });
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          if (error.response.data.errors.full_messages) {
            const errorMessages =
              error.response.data.errors.full_messages.join("\n");
            showNotify({ title: errorMessages, status: ERROR_STATUS });
          } else {
            showNotify({ title: SIGN_UP_ERROR, status: ERROR_STATUS });
          }
        } else {
          showNotify({ title: SIGN_UP_ERROR, status: ERROR_STATUS });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { signUp, loading };
};
