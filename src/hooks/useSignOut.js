import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { LOGOUT_URL } from "src/hooks/constants";

export const useSignOut = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const signOut = () => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .delete(LOGOUT_URL, {
        headers: headers,
      })
      .then((res) => {
        if (res.data) {
          lscache.remove("loginCheck");
          lscache.flush();
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
