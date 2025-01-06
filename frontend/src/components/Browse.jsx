import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import Footer from "./shared/Footer";
import { useSelector } from "react-redux";

const randomJobs = [1, 2, 3, 4, 5, 6];

const Browse = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="font-bold text-xl my-5">
          Search result ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-5 ">
          {allJobs.map((job) => {
            return <Job  key={job._id} job={job}/>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
