import axios from "axios";
import { useRouter } from "next/router";
import { authHeaders } from "src/hooks/authHeaders";
import { useNotify } from "src/hooks/useNotify";
import lscache from "lscache";
import {
  COMMON_CREATE_ERROR,
  ERROR_STATUS,
  RESERVES_URL,
  RESERVE_STATUS_VALID,
  SUCCESS_STATUS,
} from "src/hooks/constants";

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
          reserve_sts: RESERVE_STATUS_VALID,
        },
        { headers: headers }
      )
      .then((res) => {
        if (res.data.status === 200) {
          showNotify({ title: res.data.message, status: SUCCESS_STATUS });
          router.push("/events");
        } else if (res.data.status === 400) {
          showNotify({ title: res.data.message, status: ERROR_STATUS });
        }
      })
      .catch((error) => {
        showNotify({ title: COMMON_CREATE_ERROR, status: ERROR_STATUS });
        console.log(error);
      })
      .finally(() => {});
  };
  return { newReserve };
};
