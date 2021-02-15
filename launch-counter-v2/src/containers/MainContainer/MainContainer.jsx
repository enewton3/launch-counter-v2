import { useState, useEffect } from "react";
import LaunchCard from "../../components/LaunchCard/LaunchCard";
import { getUpcomingLaunches } from "../../services/upcomingLaunches";

export default function MainContainer() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await getUpcomingLaunches();
      console.log(response.results);
      setLaunches(response.results);
    };
    fetchLaunches();
  }, []);

  return (
    <div className="card-container">
      {launches &&
        launches.map((launch) => {
          return <LaunchCard launch={launch} />;
        })}
    </div>
  );
}
