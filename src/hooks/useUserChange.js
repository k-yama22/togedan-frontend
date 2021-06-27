import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useUserChange = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  // スネークケースからキャメルケースに変換（文字列）.
  const toCamelCase = (str) => {
    return str
      .split("_")
      .map(function (word, index) {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  };

  // スネークケースからキャメルケースに変換（オブジェクト）.
  const toCamelCaseObject = (obj) => {
    const result = {};
    Object.keys(obj).forEach((key) => {
      result[toCamelCase(key)] = obj[key];
    });
    return result;
  };

  const userChange = (
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    userName,
    email,
    birthday,
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
          birthday: birthday,
          phone: phone,
          image: image,
          introduce: introduce,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data) {
          const resData = toCamelCaseObject(res.data.data);
          localStorage.setItem("loginId", JSON.stringify(res.data.data.id));
          localStorage.setItem("loginUser", JSON.stringify(resData));
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
  return { userChange, loading };
};
