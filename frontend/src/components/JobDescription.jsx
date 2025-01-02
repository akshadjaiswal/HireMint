import React from "react";
import { Badge } from "./ui/badge";
import { Ghost } from "lucide-react";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">MERN Stack Developer</h1>
          <div>
            <Badge className="text-blue-700 font-bold" variant={Ghost}>
              12 Positions
            </Badge>
            <Badge className="text-[#F83002]" variant={Ghost}>
              Remote
            </Badge>
            <Badge className="text-[#7209b7]" variant={Ghost}>
              6-8 LPA
            </Badge>
          </div>
        </div>
        <Button
          variant="outline"
          disabled={isApplied}
          className={`text-white bg-black  rounded-lg ${
            isApplied ? `bg-gray-600` : `bg-[#7209b7] hover:bg-[#5f32ad]`
          }`}
        >
          {isApplied ? "Already Applied" : "Applynow"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-semibold text-lg mt-4 py-4 ">
        Job Desription
      </h1>
      <div className="my-4 ">
        <h1 className="font-bold my-1 ">
          Role:{" "}
          <span className="p1-4 font-normal text-gray-800">
            MERN stack Developer
          </span>
        </h1>
        <h1 className="font-bold my-1 ">
          Location: <span className="p1-4 font-normal text-gray-800">Pune</span>
        </h1>
        <h1 className="font-bold my-1 ">
          Description:{" "}
          <span className="p1-4 font-normal text-gray-800">
            Looking for experience MERB stack developer to collaborate with our
            team
          </span>
        </h1>
        <h1 className="font-bold my-1 ">
          Experience:{" "}
          <span className="p1-4 font-normal text-gray-800">1-3 years</span>
        </h1>
        <h1 className="font-bold my-1 ">
          Salary:{" "}
          <span className="p1-4 font-normal text-gray-800">40k - 80k</span>
        </h1>
        <h1 className="font-bold my-1 ">
          Total Applicants:{" "}
          <span className="p1-4 font-normal text-gray-800">6</span>
        </h1>
        <h1 className="font-bold my-1 ">
          Posted on:{" "}
          <span className="p1-4 font-normal text-gray-800">01-01-2025</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
