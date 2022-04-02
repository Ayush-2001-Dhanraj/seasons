import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Lets hit the Beach!",
    iconName: "sun",
    color: "red",
  },
  winter: {
    text: "Burr, it is chilly.",
    iconName: "snowflake",
    color: "teal",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, color } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon icon-left ${iconName} ${color} loading huge`}></i>
      <h1>{text}</h1>
      <i className={`icon icon-right ${iconName} ${color} loading huge`}></i>
    </div>
  );
};

export default SeasonDisplay;
