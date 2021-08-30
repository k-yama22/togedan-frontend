import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { LOGIN_URL } from "src/hooks/constants";

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
          showNotify({ title: "ログインしました", status: "success" });
          router.push("/");
        } else {
          showNotify({ title: "ユーザが存在しません", status: "error" });
        }
      })
      .catch(() => {
        showNotify({ title: "ログインできません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
        console.log("finally確認用");
      });
  };
  return { login, loading };
};
