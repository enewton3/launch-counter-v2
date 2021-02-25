import api from "./llapiconfig";

export const getUpcomingLaunches = async () => {
  const resp = await api.get("/launch/upcoming");
  return resp.data;
};
