import React from "react";
import { Button } from "./ui/button";
import { Bookmark, Ghost } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
 

  const daysAgoFunction = (mongoDBTime) => {
    const createdAt = new Date(mongoDBTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="p-5 rounded-md bg-white border border-gray-100 shadow-sm max-w-lg mx-auto lg:max-w-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) == 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)}`}
          days ago
        </p>
        <Button className="rounded-full" size="icon" variant="outline">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-4 my-4">
        <Button className="p-2" variant="outline" size="icon">
          <Avatar>
            <AvatarImage className="w-full h-full object-cover" src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg sm:text-xl">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2 sm:text-xl">{job?.title}</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          {job?.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant={Ghost}>
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002]" variant={Ghost}>
          {job?.jobType}
        </Badge>
        <Badge className="text-[#6A38C2]" variant={Ghost}>
          {job?.salary}LPA
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3 mt-6">
        <Button
          onClick={() => navigate(`/description/${job._id}`)}
          className="text-white bg-black w-full sm:w-auto"
        >
          Details
        </Button>
        <Button
          variant="outline"
          className="text-white bg-[#6A38C2] w-full sm:w-auto"
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
