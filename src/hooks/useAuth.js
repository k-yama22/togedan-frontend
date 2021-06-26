import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

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

  const login = (email, password) => {
    setLoading(true);
    axios
      .post(`http://localhost:3001/auth/sign_in`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.headers["access-token"]);
          localStorage.setItem("client", res.headers["client"]);
          localStorage.setItem("uid", res.headers["uid"]);

          const resData = toCamelCaseObject(res.data.data);
          localStorage.setItem("loginId", JSON.stringify(res.data.data.id));
          localStorage.setItem("loginUser", JSON.stringify(resData));
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
