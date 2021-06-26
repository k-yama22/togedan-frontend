import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useUserChange = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const userChange = (
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    userName,
    email,
    phone,
    image,
    introduce
  ) => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      "access-token": localStorage.getItem("accessToken"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid"),
    };
    axios
      .put(
        `http://localhost:3001/auth`,
        {
          last_name: lastName,
          first_name: firstName,
          last_name_kana: lastNameKana,
          first_name_kana: firstNameKana,
          user_name: userName,
          email: email,
          phone: phone,
          image: image,
          introduce: introduce,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data) {
          showNotify({ title: "変更完了しました", status: "success" });
          router.push("/");
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
