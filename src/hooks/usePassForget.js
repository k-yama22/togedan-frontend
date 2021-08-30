import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { PASSWORD_URL } from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";

export const usePassForget = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const passForget = (passForgetData) => {
    setLoading(true);
    axios
      .post(PASSWORD_URL, passForgetData)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          showNotify({
            title: "パスワードリセット用のメール送信しました",
            status: "success",
          });
          router.push("/login");
        } else {
          showNotify({
            title: "パスワードリセットに失敗しました",
            status: "error",
          });
        }
      })
      .catch(() => {
        showNotify({ title: "パスワードリセットできません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { passForget, loading };
};
