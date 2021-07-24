import React from "react";
import { useParams } from "react-router";

const FloorDetail = () => {
  const { floor_ID } = useParams(); // use useParams() to get id of the selected floor from url
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 25,
        marginTop: "20%",
      }}
    >
      <div>This page contains the detail of floor id: {floor_ID}</div>
    </div>
  );
};
export default FloorDetail;
