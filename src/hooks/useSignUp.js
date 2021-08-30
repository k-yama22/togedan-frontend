import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { AUTH_URL } from "src/hooks/constants";
import { useNotify } from "src/hooks/useNotify";

export const useSignUp = () => {
  const router = useRouter();
  const { showNotify } = useNotify();
  const [loading, setLoading] = useState(false);

  const signUp = (signUpData) => {
    setLoading(true);
    axios
      .post(AUTH_URL, signUpData)
      .then((res) => {
        if (res.data) {
          showNotify({ title: "仮登録完了しました", status: "success" });
          router.push("/tempRegistration");
        } else {
          showNotify({ title: "仮登録に失敗しました", status: "error" });
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          if (error.response.data.errors.full_messages) {
            const errorMessages =
              error.response.data.errors.full_messages.join("\n");
            showNotify({ title: errorMessages, status: "error" });
          } else {
            showNotify({ title: "仮登録できません", status: "error" });
          }
        } else {
          showNotify({ title: "仮登録できません", status: "error" });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { signUp, loading };
};
