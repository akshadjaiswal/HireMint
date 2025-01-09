import React from "react";
import { Badge } from "./ui/badge";
import { Ghost } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  // console.log(job)
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-md bg-white border border-gray-100 cursor-pointer"
    >
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <Badge className="text-blue-700 font-bold " variant={Ghost}>
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] " variant={Ghost}>
          {job?.jobType}
        </Badge>
        <Badge className="text-[#6A38C2] " variant={Ghost}>
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
