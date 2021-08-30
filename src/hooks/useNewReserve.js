import axios from "axios";
import { useRouter } from "next/router";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import { RESERVES_URL } from "src/hooks/constants";

export const useNewReserve = () => {
  const router = useRouter();
  const { showNotify } = useNotify();

  const newReserve = (eventId) => {
    const headers = authHeaders();
    axios
      .post(
        RESERVES_URL,
        {
          event_id: eventId,
          user_id: lscache.get("loginId"),
          reserve_sts: "1",
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data.status === 200) {
          showNotify({ title: res.data.message, status: "success" });
          router.push("/events");
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: "error" });
        }
      })
      .catch((error) => {
        showNotify({ title: "登録できません", status: "error" });
        console.log(error);
      })
      .finally(() => {
        console.log("finally確認用");
      });
  };
  return { newReserve };
};
