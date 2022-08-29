import React from "react";

const About = () => {
  return (
    <div className="conatiner">
      <div className="py-4">
        <h1>About Page</h1>

        <p className="lead">
          React Router is a lightweight, fully-featured routing library for the
          React JavaScript library. React Router runs everywhere that React
          runs; on the web, on the server (using node.js), and on React Native.
        </p>
        <p className="lead">
          If you're migrating to v6 from v5 (or v4, which is the same as v5),
          check out the migration guide. If you're migrating from Reach Router,
          check out the migration guide for Reach Router. If you need to find
          the code for v5, it is on the v5 branch.
        </p>
      </div>
    </div>
  );
};

export default About;
