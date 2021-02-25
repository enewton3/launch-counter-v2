import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "90%",
    // height: "30vh",
  },
}));

export default function LaunchCard(props) {
  const { launch } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div>XX:XX:XX:XX</div>
      <div className="launch-name">{launch.name}</div>
    </Card>
  );
}
