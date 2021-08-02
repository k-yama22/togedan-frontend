import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useSignUp = () => {
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

  const signUp = (signUpData) => {
    setLoading(true);
    axios
      .post(`http://localhost:3001/auth`, signUpData)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.headers["access-token"]);
          localStorage.setItem("client", res.headers["client"]);
          localStorage.setItem("uid", res.headers["uid"]);

          const resData = toCamelCaseObject(res.data.data);
          localStorage.setItem("loginId", JSON.stringify(res.data.data.id));
          localStorage.setItem("loginUser", JSON.stringify(resData));
          showNotify({ title: "登録完了しました", status: "success" });
          router.push("/");
        } else {
          showNotify({ title: "登録に失敗しました", status: "error" });
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          const errorMessages =
            error.response.data.errors.full_messages.join("\n");
          showNotify({ title: errorMessages, status: "error" });
        } else {
          showNotify({ title: "登録できません", status: "error" });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { signUp, loading };
};
