import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useAuth = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const login = (email, password) => {
    setLoading(true);
    axios
      .post(`http://localhost:3001/auth/sign_in`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("loginId", JSON.stringify(res.data.data.id));
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
