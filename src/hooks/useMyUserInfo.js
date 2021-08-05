import { useState } from "react";
import lscache from "lscache";

export const useMyUserInfo = () => {
  const [myUserInfo, setMyUserInfo] = useState({});

  const getMyUserInfo = () => {
    setMyUserInfo(JSON.parse(lscache.get("loginUser")));
  };
  return { getMyUserInfo, myUserInfo };
};
