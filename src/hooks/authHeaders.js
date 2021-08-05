import lscache from "lscache";

export const authHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
    "access-token": lscache.get("accessToken"),
    client: lscache.get("client"),
    uid: lscache.get("uid"),
  };

  return headers;
};
