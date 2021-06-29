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
        if (res.data.status === 200) {
          showNotify({ title: "登録完了しました", status: "success" });
          router.push("/events");
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: "error" });
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
