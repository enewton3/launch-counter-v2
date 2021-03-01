import api from "./llapiconfig";

export const getUpcomingLaunches = async () => {
  const resp = await api.get("/launch/upcoming");
  return resp.data;
};

export const getOneLaunch = async (id) => {
  const resp = await api.get(`/launch/${id}`);
  return resp.data;
};
