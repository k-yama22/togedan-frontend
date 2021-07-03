import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const usePassChange = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const passChange = (currentPassword, password, confirmPassword) => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .put(
        `http://localhost:3001/auth/password`,
        {
          current_password: currentPassword,
          password: password,
          password_confirmation: confirmPassword,
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
