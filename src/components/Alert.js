import React from "react";

export default function Alert(props) {
  return (
    <div
      className={`alert alert-primary fixed-top ${
        props.msg.length === 0 ? "d-none" : "d-none"
      }`}
      role="alert"
      style={{ marginTop: "55px" }}
    >
      {props.msg}
    </div>
  );
}
