import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useDeleteAccount = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const deleteAccount = () => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .delete(`http://localhost:3001/auth/`, {
        headers: headers,
      })
      .then((res) => {
        if (res.data) {
          localStorage.clear();
          showNotify({ title: "退会しました", status: "success" });
          router.push("/login");
        } else {
          showNotify({ title: "退会に失敗しました", status: "error" });
        }
      })
      .catch(() => {
        showNotify({ title: "退会できません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { deleteAccount, loading };
};
