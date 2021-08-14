import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";

export const useUserChange = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const userChange = (editData) => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .put(`http://localhost:3001/auth`, editData, { headers: headers })
      .then((res) => {
        if (res.data) {
          showNotify({ title: "変更完了しました", status: "success" });
          lscache.set("loginImg", res.data.data.image, 100);
          router.push("/myPage");
        } else {
          showNotify({ title: "変更に失敗しました", status: "error" });
        }
      })
      .catch(() => {
        showNotify({ title: "変更できません", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { userChange, loading };
};
