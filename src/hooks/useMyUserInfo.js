import axios from "axios";
import { useCallback, useState } from "react";
import { useNotify } from "src/hooks/useNotify";

export const useMyUserInfo = () => {
  // const { showNotify } = useNotify();
  const [myUserInfo, setMyUserInfo] = useState({});

  const getMyUserInfo = useCallback(() => {
    // const loginId = localStorage.getItem("loginId");
    setMyUserInfo(JSON.parse(localStorage.getItem("loginUser")));
  }, []);
  return { getMyUserInfo, myUserInfo };
};
