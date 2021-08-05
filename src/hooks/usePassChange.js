import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";

export const usePassChange = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const passChange = (data) => {
    setLoading(true);
    const headers = authHeaders();
    axios
      .put(
        `http://localhost:3001/auth/password`,
        {
          current_password: data.currentPassword,
          password: data.password,
          password_confirmation: data.confirmPassword,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          showNotify({ title: "変更完了しました", status: "success" });
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
  return { passChange, loading };
};
