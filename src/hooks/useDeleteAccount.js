import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { authHeaders } from "src/hooks/authHeaders";

export const useDeleteAccount = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const deleteAccount = () => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .delete(`http://localhost:3001/auth/`, {
        headers: headers,
      })
      .then((res) => {
        if (res.data) {
          lscache.remove("loginCheck");
          lscache.flush();
          showNotify({ title: "退会しました", status: "success" });
          router.push("/login");
        } else {
          showNotify({ title: "退会に失敗しました", status: "error" });
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          if (error.response.data.errors) {
            const errorMessages = error.response.data.errors.join("\n");
            showNotify({ title: errorMessages, status: "error" });
          } else {
            showNotify({ title: "退会できません", status: "error" });
          }
        } else {
          showNotify({ title: "退会できません", status: "error" });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { deleteAccount, loading };
};
