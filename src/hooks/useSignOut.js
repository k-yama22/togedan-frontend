import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useSignOut = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const signOut = () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .delete(`http://localhost:3001/auth/sign_out`, {
        headers: headers,
      })
      .then((res) => {
        if (res.data) {
          localStorage.clear();
          showNotify({ title: "ログアウトしました", status: "success" });
          router.push("/login");
        } else {
          showNotify({ title: "ログアウトに失敗しました", status: "error" });
        }
      })
      .catch(() => {
        showNotify({ title: "ログアウトできません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { signOut, loading };
};
