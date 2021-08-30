import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { PASSWORD_URL } from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";

export const usePassReset = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const passReset = (data, accessToken, client, uid) => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      "access-token": accessToken,
      client: client,
      uid: uid,
    };
    axios
      .put(
        PASSWORD_URL,
        {
          password: data.password,
          password_confirmation: data.confirmPassword,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          showNotify({ title: "変更完了しました", status: "success" });
          router.push("/login");
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
  return { passReset, loading };
};
