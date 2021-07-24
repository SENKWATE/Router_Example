import React from "react";
import { Link } from "react-router-dom";

const Home = ({ malls }) => {
  const mall_id = 1;
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 25,
        marginTop: "20%",
      }}
    >
      <div>This is home page with all list of malls name</div>
      <Link className="btn btn-primary" to={`/malls/${mall_id}`}>
        floors page
      </Link>
    </div>
  );
};
export default Home;
