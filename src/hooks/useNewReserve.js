import axios from "axios";
import { useRouter } from "next/router";
import { useNotify } from "src/hooks/useNotify";

export const useNewReserve = () => {
  const router = useRouter();
  const { showNotify } = useNotify();

  const newReserve = (eventId) => {
    axios
      .post(`http://localhost:3001/api/v1/reserves`, {
        event_id: eventId,
        user_id: localStorage.getItem("loginId"),
        reserve_sts: "1",
      })
      .then((res) => {
        if (res.data) {
          showNotify({ title: "登録完了しました", status: "success" });
          router.push("/events");
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
  return { newReserve };
};
