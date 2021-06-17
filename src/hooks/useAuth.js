import axios from "axios";
import { useRouter } from "next/router";
import { useNotify } from "../hooks/useNotify";

export const useAuth = () => {
  const router = useRouter();
  const { showNotify } = useNotify();

  const login = (email, password) => {
    axios
      .post(`http://localhost:3001/auth/sign_in`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data) {
          showNotify({ title: "ログインしました", status: "success" });
          router.push("/");
        } else {
          showNotify({ title: "ユーザが存在しません", status: "error" });
        }
      })
      .catch(() => {
        showNotify({ title: "ログインできません", status: "error" });
      })
      .finally(() => console.log("finally確認用"));
  };
  return { login };
};
