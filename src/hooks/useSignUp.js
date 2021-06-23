import axios from "axios";
import { useRouter } from "next/router";
import { useNotify } from "src/hooks/useNotify";

export const useSignUp = () => {
  const router = useRouter();
  const { showNotify } = useNotify();

  const signUp = (
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    userName,
    email,
    password,
    birthday,
    phone,
    image,
    introduce
  ) => {
    axios
      .post(`http://localhost:3001/auth`, {
        last_name: lastName,
        first_name: firstName,
        last_name_kana: lastNameKana,
        first_name_kana: firstNameKana,
        user_name: userName,
        email: email,
        password: password,
        birthday: birthday,
        phone: phone,
        image: image,
        introduce: introduce,
      })
      .then((res) => {
        if (res.data) {
          showNotify({ title: "登録完了しました", status: "success" });
          router.push("/");
        } else {
          showNotify({ title: "登録に失敗しました", status: "error" });
        }
      })
      .catch(() => {
        showNotify({ title: "登録できません", status: "error" });
      })
      .finally(() => {
        console.log("finally確認用");
      });
  };
  return { signUp };
};
