import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  ERROR_STATUS,
  INDEX_SCREEN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_URL,
  NO_USER_ERROR,
  SUCCESS_STATUS,
} from "src/utils/constants";

export const useAuth = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  // スネークケースからキャメルケースに変換（文字列）.
  const toCamelCase = (str) => {
    return str
      .split("_")
      .map(function (word, index) {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  };

  // スネークケースからキャメルケースに変換（オブジェクト）.
  const toCamelCaseObject = (obj) => {
    const result = {};
    Object.keys(obj).forEach((key) => {
      result[toCamelCase(key)] = obj[key];
    });
    return result;
  };

  const login = (data) => {
    setLoading(true);
    axios
      .post(LOGIN_URL, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          lscache.set("accessToken", res.headers["access-token"], 100);
          lscache.set("client", res.headers["client"], 100);
          lscache.set("uid", res.headers["uid"], 100);

          const resData = toCamelCaseObject(res.data.data);
          lscache.set("loginId", JSON.stringify(resData.id), 100);
          lscache.set("loginImg", resData.image, 100);
          lscache.set("loginCheck", true);
          showNotify({ title: LOGIN_SUCCESS, status: SUCCESS_STATUS });
          router.push(INDEX_SCREEN);
        } else {
          showNotify({ title: NO_USER_ERROR, status: ERROR_STATUS });
        }
      })
      .catch(() => {
        showNotify({ title: LOGIN_ERROR, status: ERROR_STATUS });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { login, loading };
};
