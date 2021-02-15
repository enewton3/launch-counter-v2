import React from "react";

export default function Card(props) {
  const { launch } = props;
  return (
    <div className="card">
      <div>XX:XX:XX:XX</div>
      <div className="launch-name">{launch.name}</div>
      <div>Made a change</div>
    </div>
  );
}
