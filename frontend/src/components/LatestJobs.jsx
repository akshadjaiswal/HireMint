import React from "react";
import LatestJobCards from "./LatestJobCards";

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold ">
        {" "}
        <span className="text-[#6A38C2]">Latest</span> Job Openings
      </h1>
      <LatestJobCards></LatestJobCards>
    </div>
  );
};

export default LatestJobs;
