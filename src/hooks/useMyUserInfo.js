import { useState } from "react";

export const useMyUserInfo = () => {
  // const { showNotify } = useNotify();
  const [myUserInfo, setMyUserInfo] = useState({});

  const getMyUserInfo = () => {
    // const loginId = localStorage.getItem("loginId");
    setMyUserInfo(JSON.parse(localStorage.getItem("loginUser")));
  };
  return { getMyUserInfo, myUserInfo };
};
