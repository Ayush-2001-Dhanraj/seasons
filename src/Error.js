import React from "react";

const Error = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui">{props.message}</div>
    </div>
  );
};

Error.defaultProps = {
  message: "Some Error Occured",
};

export default Error;
