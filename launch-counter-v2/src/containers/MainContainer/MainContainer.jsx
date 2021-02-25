import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import LaunchCard from "../../components/LaunchCard/LaunchCard";
import { getUpcomingLaunches } from "../../services/upcomingLaunches";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: "0 auto",
    width: "90vw",
    height: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "space-around",
    // overflowY: "scroll",
  },
}));

export default function MainContainer() {
  const [launches, setLaunches] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await getUpcomingLaunches();
      console.log(response.results);
      setLaunches(response.results);
    };
    fetchLaunches();
  }, []);

  return (
    <div className={classes.mainContainer}>
      {launches &&
        launches.map((launch) => {
          return <LaunchCard key={launch.id} launch={launch} />;
        })}
    </div>
  );
}
