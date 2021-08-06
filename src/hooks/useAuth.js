import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";

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
      .post(`http://localhost:3001/auth/sign_in`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          lscache.set("accessToken", res.headers["access-token"], 1);
          lscache.set("client", res.headers["client"], 1);
          lscache.set("uid", res.headers["uid"], 1);

          const resData = toCamelCaseObject(res.data.data);
          lscache.set("loginId", JSON.stringify(resData.id), 1);
          lscache.set("loginUser", JSON.stringify(resData), 1);
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
