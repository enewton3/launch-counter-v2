import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import { useTheme } from "@material-ui/core";

export default function LaunchCard(props) {
  const { launch } = props;

  return (
    <Card>
      <div>XX:XX:XX:XX</div>
      <div className="launch-name">{launch.name}</div>
    </Card>
  );
}
