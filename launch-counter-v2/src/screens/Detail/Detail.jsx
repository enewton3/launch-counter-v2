import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneLaunch } from "../../services/upcomingLaunches";

export default function Detail() {
  const [launch, setLaunch] = useState({});
  const params = useParams();

  const getLaunch = async () => {
    const resp = getOneLaunch(params.id);
    setLaunch(resp.data);
  };

  useEffect(() => {
    getLaunch();
  }, []);

  return <div>{launch ? launch.name : <>Loading...</>}</div>;
}
