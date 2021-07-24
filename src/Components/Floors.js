import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Floors = () => {
  const floor_ID = 3;
  const { mall_ID } = useParams(); // use useParams() to get id of the selected mall from url
  const current_url = useLocation().pathname;

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
      <div>This page contains all Floors of mall id:{mall_ID}</div>
      <Link className="btn btn-primary" to={`${current_url}/${floor_ID}`}>
        detail page
      </Link>
    </div>
  );
};
export default Floors;
